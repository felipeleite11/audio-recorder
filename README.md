<h1 align="center">NodeJS Audio Recorder</h1>

This project implements a audio recorder using the WEB API native from browsers.

<p align="center">
	<img src="https://user-images.githubusercontent.com/54327441/112744378-f6d48300-8f75-11eb-81ee-e82f39ef7817.png" height="250" width="458" alt="Demo screen" />
</p>

<h2>Environment requirements</h2>

- [NodeJS](https://nodejs.org) with the [NPM](https://www.npmjs.com) package manager installed.

<h2>Required NPM packages</h2>

|  Module    | Purpose                                                   |
| -------------------------: | ----------------------------------------- |
| `http-server`  | Create a web server to serve statically the test page |


<h2>Features</h2>

- Audio record with WEBM mimetype and OPUS codec
- Audio play in browser
- Audio download in WEBM format


<h2>Get started</h2>

- Clone the project: `git clone https://github.com/felipeleite11/audio-recorder.gitt`
- Execute installation of dependencies: `npm install`
- Execute application: `npm start`
- Open `http://localhost:8080` in your browser
- **Allow the required permission** to access your **microphone**


<h2>Browser compatibility</h2>

Check support details in [Can I use](https://caniuse.com/mediarecorder).


<h2>Contribution suggestions</h2>

- Support to more mime types (MP3, WAV, OGG)
- Select the format when downloading
