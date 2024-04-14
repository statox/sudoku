<script lang="ts">
    import { onMount } from "svelte";
    import P5, { type Sketch } from 'p5-svelte';
    import { base } from '$app/paths';
    import cv from "@techstark/opencv-js";

    const imgSrcs = ['sudoku-blankgrid_small.png', 'sudoku-blankgrid1.png', 'sudoku-blankgrid3.png', 'sudoku-blankgrid-4combi.png', 'sudoku-blankgrid2.png', '/sudoku.png', '/sudoku_colors.png', 'pic1.JPEG', 'pic2.JPEG', 'pic3.JPEG', 'pic4.JPEG', 'pic5.JPEG', 'pic6.JPEG']
    let imgSrc = imgSrcs[0];

    let buildInfo: string = "";

    let largestRect: cv.Rect | undefined;
    let squares: cv.Rect[] = [];
    let rects: cv.Rect[] = [];


    let edgesCanvas: HTMLCanvasElement;

    const checkForSquares = async () => {
        largestRect = undefined;
        rects = [];
        squares = [];

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
        cv.imshow(edgesCanvas, edges);

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

        const { width, height } = src.size();

        // Clean up
        src.delete();
        gray.delete();
        edges.delete();
        contours.delete();
        hierarchy.delete();


        // Show results with P5
        sketch = (p5) => {
            p5.setup = () => {
                p5.createCanvas(width, height);
                p5.textStyle(p5.BOLD);
            };
            p5.draw = () => {
                p5.background(0);
                p5.noLoop();


                p5.noFill();
                p5.stroke(255);
                p5.strokeWeight(2);
                for (const square of squares) {
                    p5.rect(square.x, square.y, square.width, square.height);
                }

                p5.stroke(255, 0, 0, 120);
                p5.strokeWeight(1);
                for (const square of rects) {
                    p5.rect(square.x, square.y, square.width, square.height);
                }
            };
        };
    };

    let sketch: Sketch = (p5) => {
        p5.setup = () => {
            p5.createCanvas(0, 0);
            p5.textStyle(p5.BOLD);
        };
        p5.draw = () => {
            p5.background(0);
            p5.noLoop();
        };
    };

    onMount(() => setTimeout(() => {
        buildInfo = cv.getBuildInformation()
        checkForSquares();
    }, 1000))
</script>

<h1>opencv.js build information</h1>

<div class="images-container">
    <img id="imgToAnalyze" alt='data to analyze' src={base + '/test-images/' + imgSrc} />

    <canvas bind:this={edgesCanvas}></canvas>

    {#key sketch}
    <P5 {sketch} />
    {/key}
</div>

<label for="imageInput">Select an image to analyze</label>
<select id="imageInput" bind:value={imgSrc} on:change={() => setTimeout(checkForSquares, 500)}>
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


<style>
    .images-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #imgToAnalyze {
        max-height: calc(100vh / 3);
    }
</style>
