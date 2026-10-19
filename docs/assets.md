# Asset sources

## Current showcase

- `public/models/atelier-chair.glb`: [Mid Century Lounge Chair](https://polyhaven.com/a/mid_century_lounge_chair), Kuutti Siitonen / Poly Haven, [CC0](https://polyhaven.com/license). Geometry preserved; 2K textures recompressed for web delivery; normal strength and dielectric specular refined for softer studio lighting. Packed as a self-contained GLB, approximately 3.5 MB.
- `public/models/coffee-table.glb`: [Coffee Table Round 01](https://polyhaven.com/a/coffee_table_round_01), Ulan Cabanilla / Poly Haven, [CC0](https://polyhaven.com/license). Geometry preserved; 2K textures recompressed and packed into a self-contained GLB, approximately 2.3 MB.
- `atelier-chair-poster.webp` and `coffee-table-poster.webp`: rendered locally from the actual models, with supersampling for cleaner edges. These assets are used in the collection, loading state and store illustration.
- The hero uses a bounded, slow turntable motion, never a room backdrop. The full camera controls are available through the explicit 3D viewer.

## Archived 3D models

- `public/models/lounge.glb`: [Sheen Chair](https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/SheenChair), Eric Chadwick / Wayfair LLC, 2020, [CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/). Fabric base colours and sheen colours adjusted to terracotta and forest green. Geometry and native variant behaviour preserved.
- `public/models/mesa.glb`: original demonstration model from `https://ar.realityconcept3d.com/mesa.glb`, preserved from the existing project.
- `public/models/cadeira.glb`: original `https://ar.realityconcept3d.com/cadeira.glb`, [Office Chair Modern by thethieme](https://sketchfab.com/3d-models/office-chair-modern-675f34f7304e4d92812a41e9750539aa), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Unmodified. Retained for existing deep links; no longer the main hero.
- The `*-poster.webp` images were rendered from these GLB files using model-viewer. They match the interactive models.

## Archived architectural background (not used by the current site)

`public/images/architectural-room.webp` was generated with the built-in image generation tool and converted to WebP for delivery. It is an illustrative setting, not a photograph of a completed client project. The initial room transition has been removed following design review. This background is retained as an archived asset and is not requested by the current page.

Generation prompt:

> Use case: photorealistic-natural. Asset type: full-bleed architectural background for a premium furniture 3D studio website. Create an ultra high-end editorial interior photograph, wide landscape 3:2. Empty quiet Mediterranean modernist living room in warm ivory limewashed plaster, broad pale warm limestone floor, strong architectural afternoon sun from unseen windows at left, long soft geometric shadows. On far right edge only: part of a low travertine plinth and a sculptural dry branch in a dark ceramic vase. In far left background a recessed doorway with a darker stone wall. The central and right foreground floor must be entirely empty, intended for compositing a single 3D lounge chair later. Camera at furniture catalogue height, looking level slightly down, single point perspective, floor-wall horizon at approximately 46 percent image height. Calm blank wall on left for website typography. Sophisticated realistic textures, tactile, subtle warm film grain, restrained color, muted limestone, editorial architectural photography, exceptional natural light. No furniture in middle or right foreground, no chair, no sofa, no humans, no text, no logo, no watermarks, no interface or frames.

## Identity

The geometric brand mark and favicon are native SVG. The social cover combines native typography with the rendered chair poster. Manrope and Cormorant Garamond are self-hosted through `next/font`.
