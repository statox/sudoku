<script lang="ts">
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import { createWorker } from 'tesseract.js';

    const imgSrcs = [ '2342.png', 'sudoku.png', 'opencv_github.png', 'sudoku_colors.png']
    let imgSrc = imgSrcs[0];

    let result: any[] = [];
    let progress: any[] = [];

    const checkForDigits = async () => {
        result = [];
        progress = [];

        const worker = await createWorker('eng', 1, {
            logger: (m) => {
                progress = [m, ...progress];
            }
        });

        await worker.setParameters({
            tessedit_char_whitelist: '123456789',
        });

        const recognized = await worker.recognize(base + '/test-images/' + imgSrc);
        result = recognized.data.symbols;

        await worker.terminate();
    };

    const symbolsSort = (a: Tesseract.Symbol, b: Tesseract.Symbol) => {
        return a.bbox.y0 - b.bbox.y0 || a.bbox.x0 - b.bbox.x0;
    };

    onMount(() => checkForDigits());
</script>

<div>
    <p>
        This page uses <a target="_blank" rel="noopener noreferrer" href="https://github.com/naptha/tesseract.js">tesseract.js</a> to do some OCR
        on images to detect digits from 1 to 9.
    </p>
    <p>
        It works well on the image <code>2342.png</code> because the digits are all next to each other and form a word but tesseract is not the right
        tool to recognize a complete sudoku grid. Instead I'll experiment with another tool like openCV to first detect the rectangles in the image
        and once each rectable is identified see if I can use tesseract or a simpler pattern matching method to identify the content of the cells.
    </p>
</div>

<img alt='data to analyze' src={base + '/test-images/' + imgSrc} />

<label for="imageInput">Select an image to analyze</label>
<select id="imageInput" bind:value={imgSrc} on:change={checkForDigits}>
    {#each imgSrcs as option}
        <option value={option}>
            {option}
        </option>
    {/each}
</select>

<div>
    <span>Results:</span>

    <table>
        <thead>
            <th>text</th>
            <th>confidence</th>
            <th>bbox.x0</th>
            <th>bbox.y0</th>
            <th>bbox.x1</th>
            <th>bbox.y1</th>
            <th>Size (w, h)</th>
        </thead>
    {#each result.sort(symbolsSort)  as symbol}
        <tr>
            <td>{symbol.choices[0]?.text}</td>
            <td>{symbol.choices[0]?.confidence?.toFixed(2)}</td>
            <td>{symbol.bbox.x0}</td>
            <td>{symbol.bbox.y0}</td>
            <td>{symbol.bbox.x1}</td>
            <td>{symbol.bbox.y1}</td>
            <td>{symbol.bbox.x1-symbol.bbox.x0}, {symbol.bbox.y1-symbol.bbox.y0}</td>
        </tr>
    {/each}
    </table>

    <hr/>
    <span>Progress:</span>
    <ul>
        {#each progress as item}
            <li>{item.status} - {(item.progress * 100).toFixed(0)}%</li>
        {/each}
    </ul>
</div>
