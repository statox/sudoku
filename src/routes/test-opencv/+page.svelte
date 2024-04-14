<script lang="ts">
    import { onMount } from "svelte";
    import { base } from '$app/paths';
    import cv from "@techstark/opencv-js";

    const imgSrcs = ['sudoku-blankgrid_small.png', 'sudoku-blankgrid1.png', 'sudoku-blankgrid2.png', '/sudoku.png', '/sudoku_colors.png']
    let imgSrc = imgSrcs[0];

    let buildInfo: string = "";

    let largestRect: cv.Rect | undefined;
    let squares: cv.Rect[] = [];
    let rects: cv.Rect[] = [];

    const checkForSquares = async () => {
        largestRect = undefined;
        rects = [];

        const imgEl = document.getElementById('imgToAnalyze');
        if (!imgEl) {
            return;
        }
        const src = cv.imread(imgEl);

        const gray = new cv.Mat();
        const edges = new cv.Mat();
        const contours = new cv.MatVector();
        const hierarchy = new cv.Mat();

        // Convert to grayscale
        cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);

        // Apply Gaussian blur to reduce noise
        cv.GaussianBlur(gray, gray, new cv.Size(5, 5), 0, 0, cv.BORDER_DEFAULT);

        // Use Canny edge detection
        cv.Canny(gray, edges, 50, 150);

        // Find contours
        cv.findContours(edges, contours, hierarchy, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE);

        // Find the largest rectangle
        largestRect = new cv.Rect();
        let largestArea = 0;
        for (let i = 0; i < contours.size(); ++i) {
            const contour = contours.get(i);
            const rect = cv.boundingRect(contour);
            const ratio = rect.width / rect.height;
            if (ratio < 0.9 || ratio > 1.1) {
                rects.push(rect);
                continue;
            }
            squares.push(rect);
            const area = rect.width * rect.height;
            if (area > largestArea) {
                largestArea = area;
                largestRect = rect;
            }
        }

        rects = rects.sort((a, b) => {
            const areaA = a.width * a.height;
            const areaB = b.width * b.height;
            return areaB - areaA || a.y - b.y || a.x - b.x;
        });
        squares = squares.sort((a, b) => {
            const areaA = a.width * a.height;
            const areaB = b.width * b.height;
            return areaB - areaA || a.y - b.y || a.x - b.x;
        });

        // Clean up
        src.delete();
        gray.delete();
        edges.delete();
        contours.delete();
        hierarchy.delete();
    };

    onMount(() => setTimeout(() => buildInfo = cv.getBuildInformation(), 1000))
</script>

<h1>opencv.js build information</h1>

<img id="imgToAnalyze" alt='data to analyze' src={base + '/test-images/' + imgSrc} />

<label for="imageInput">Select an image to analyze</label>
<select id="imageInput" bind:value={imgSrc} on:change={checkForSquares}>
    {#each imgSrcs as option}
        <option value={option}>
            {option}
        </option>
    {/each}
</select>

<button on:click={checkForSquares}>Check squares</button>

<table>
    <thead>
        <th></th>
        <th>x</th>
        <th>y</th>
        <th>width</th>
        <th>height</th>
        <th>area</th>
    </thead>

    <thead>
        <th>largestRect</th>
    </thead>
    <tbody>
        {#if largestRect}
            <tr>
                <td>largest</td>
                <td>{largestRect.x}</td>
                <td>{largestRect.y}</td>
                <td>{largestRect.width}</td>
                <td>{largestRect.height}</td>
                <td>{largestRect.width * largestRect.height}</td>
            </tr>
        {/if}
    </tbody>
    <thead>
        <th>Squares</th>
    </thead>
    <tbody>
        {#each squares as rect, i}
            <tr>
                <td>{i}</td>
                <td>{rect.x}</td>
                <td>{rect.y}</td>
                <td>{rect.width}</td>
                <td>{rect.height}</td>
                <td>{rect.width * rect.height}</td>
            </tr>
        {/each}
    </tbody>
    <thead>
        <th>Other rectangles</th>
    </thead>
    <tbody>
        {#each rects as rect, i}
            <tr>
                <td>{i}</td>
                <td>{rect.x}</td>
                <td>{rect.y}</td>
                <td>{rect.width}</td>
                <td>{rect.height}</td>
                <td>{rect.width * rect.height}</td>
            </tr>
        {/each}
    </tbody>
</table>

<textarea style="width: 100%; height: 600px;">
    {buildInfo}
</textarea>
