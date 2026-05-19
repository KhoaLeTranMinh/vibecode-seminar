import asyncio
import pathlib
from io import BytesIO

from playwright.async_api import async_playwright
from PIL import Image

HTML = pathlib.Path(r"C:\Users\KhoaLTM\Code\vibecode-seminar\vibecode-seminar_ver2_ja.html")
OUT = HTML.with_suffix(".pdf")


async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={"width": 1280, "height": 720})
        await page.goto(HTML.as_uri())

        # Wait for fonts/resources to load
        await page.wait_for_load_state("networkidle")

        slides = await page.query_selector_all(".slide")
        print(f"Found {len(slides)} slides")

        images = []
        for i, slide in enumerate(slides):
            await slide.scroll_into_view_if_needed()
            await page.wait_for_timeout(900)  # let entrance animations finish
            buf = await page.screenshot(full_page=False)
            images.append(Image.open(BytesIO(buf)).convert("RGB"))
            print(f"  Captured slide {i + 1}/{len(slides)}")

        await browser.close()

    if not images:
        print("No slides found — check that .slide elements exist in the HTML.")
        return

    images[0].save(OUT, save_all=True, append_images=images[1:])
    print(f"\nSaved {len(images)} slides → {OUT}")


asyncio.run(main())
