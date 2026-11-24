# Glasswave

Glasswave is a generic, MIT-licensed desktop music-player interface with a liquid-glass look. It is a front end for public music links and official embedded playback; it does not rip or download audio, remove ads, bypass subscriptions, or include credentials or personal data.

## Features

- Import Spotify and Apple Music song and playlist URLs. Glasswave keeps the original link; **Open service** hands playback to the official Spotify/Apple Music app or web player, where that service's account and subscription rules apply. Playlist links are imported as service handoffs; Glasswave does not copy playlist audio or require a developer key.
- Use the official YouTube embedded player when you want a video match that is not available from the music service. Find on YouTube opens a search for an official match; choose a result and paste its video URL/ID. Automatic top-result selection is not implemented (there is no YouTube Data API credential and the app does not scrape search results).
- Look up line-timed lyrics from LRCLIB. Full-screen Karaoke highlights and smoothly scrolls the active line. LRCLIB provides line timing, not word-level timing, so word-by-word highlighting is not claimed.
- Customize Ocean, Ember, Violet, Forest and Monochrome themes; custom glow color; Aurora, Sunset, Forest Mist, Midnight or theme-blend backgrounds; glass opacity, blur, shadow depth, corner radius, glow, transition intensity and low-end-PC mode. Preferences are stored locally in this browser profile.

## Preview

![Illustrated Glasswave UI preview](./assets/glasswave-preview.svg)

This is an original SVG illustration of the player UI based on the supplied reference video, **not a captured screenshot**. The video attachment could not be exported to a still image in this editing environment.

## Run

- **Browser:** open `index.html` in a modern browser. Internet access is needed for LRCLIB, YouTube and metadata lookups.
- **Electron desktop:** install Node.js 20 or newer, then run `npm install` and `npm start` from the repository directory.

## Build Windows executables

On Windows, run:

```sh
npm install
npm run dist
```

The electron-builder configuration produces x64 NSIS installer and portable `.exe` targets in `dist/`. To build and publish via GitHub Actions, push a version tag (for example `v1.0.1`). The `windows-latest` workflow builds both targets and attaches generated `.exe` files to that tag's GitHub Release.

## Credits

- Lyrics metadata: [LRCLIB](https://lrclib.net/).
- Embedded playback: [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api); playback stays in YouTube's official player.
- Link metadata: Spotify oEmbed and Apple's public iTunes Search API.
- Desktop packaging: [Electron](https://www.electronjs.org/) and [electron-builder](https://www.electron.build/).
- UI illustration references the Glasswave demonstration video supplied with the project brief.

Glasswave is an independent project, not affiliated with Spotify, Apple, YouTube or LRCLIB. See [LICENSE](./LICENSE) for the MIT license.
