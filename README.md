# Glasswave

Glasswave is a self-contained, single-file HTML music-player front end with a liquid-glass inspired desktop UI, appearance controls, a low-end-PC performance mode, LRCLIB synced-lyrics lookup, and official YouTube embedded playback. Spotify and Apple Music links can be imported for track metadata. No audio is ripped, downloaded, or supplied by this project; ads are not stripped. Link imports use public metadata endpoints and the playback video is chosen by the user from YouTube search results.

## Visual preview

![Glasswave interface preview — SVG recreation based on the supplied reference video](./assets/glasswave-preview.svg)

The reference video shows the player with the settings panel and synced lyrics. This repository preview is an original SVG recreation of that UI, not a captured video frame: the supplied video could not be exported as a still image in this workflow.

## Run

- **Browser:** open `index.html` directly in a modern browser. Internet access is needed for the YouTube iframe, metadata lookups, and LRCLIB lyrics.
- **Desktop development:** install Node.js 20+ and run `npm install`, then `npm start`.

## Build Windows executables

On Windows (or via the included GitHub Actions workflow), run:

```sh
npm install
npm run dist
```

The electron-builder configuration targets both an NSIS installer and a portable x64 `.exe`. Locally generated files are written to `dist/`.

To publish a GitHub Release build, push a version tag such as `v1.0.0`; `.github/workflows/release.yml` builds on `windows-latest` and uploads the installer and portable executable to that tag's release.

## Credits

- Lyrics lookup: [LRCLIB](https://lrclib.net/).
- Playback: [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api); playback remains within YouTube's official player.
- Track metadata: Spotify oEmbed and Apple's public iTunes Search API.
- Desktop runtime and packaging: [Electron](https://www.electronjs.org/) and [electron-builder](https://www.electron.build/).
- Visual reference: the Glasswave demonstration video supplied with the project brief.

Glasswave is an independent front-end demo and is not affiliated with Spotify, Apple, YouTube, or LRCLIB. See [LICENSE](./LICENSE) for the MIT terms.
