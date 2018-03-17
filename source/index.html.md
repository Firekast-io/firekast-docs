---
title: Documentations

language_tabs: # must be one of https://git.io/vQNgJ
  - swift: iOS
  - java: android
  - javascript

toc_footers:
  - <a href='https://api.firekast.io/'>Access your dashboard</a>
  - <a href='https://firekast.io/'>Back to firekast.io</a>
  - <ul>API Reference<li><a href="https://firekast.io/sdk/ios/docs">iOS</a></li><li><a href="https://firekast.io/sdk/android/docs">Android</a></li></ul>
  - <p>Made with 🍕 in Paris, <a href="http://www.agoranov.com/#startup">Agoranov</a></p>

search: false
---

# Welcome

Welcome to Firekast! The best developer tools to bring live video streaming into your app without being a video expert. 

Firekast is a Video as a Service platform, we provide iOS and Android SDKs to wrap camera usage, streaming, video encoding and player into something sweet and easy to use. Yes, you are 5 minutes away to make the next Periscope 😎

We obsesses over developer experience and want this documentation to be as clear as possible. If you have any question or suggestion, please feel free to [contact us](mailto:contact@firekast.io).

One more thing, visit our [roadmap](https://trello.com/b/5JjUolUp/firekast-roadmap) for unimplemented features.

# Firekast Basics

Before we start, let's introduce some Firekast basics concepts. You may already be familiar with since we designed our service with well known SaaS platforms in mind.

*Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less. -- Marie Curie*

## Application

On your dashboard, you can create as many applications as you like. An application is identified with its unique **applicationId** and gathers all the streams you have made using this id.

To create an application, you must specify a *name* (usually your company name or app name), whether your application is under *development* or *production* (we provide better performance for PROD apps) and specify a *plan* (free or paying, see [pricing](http://firekast.io/pricing)). Each of these information can be edited later.

An application can be deleted if you decide so.

<aside class="warning">
If an application is deleted, all the videos it contains will be deleted in the mean time.
</aside>

## clientKey

This is your private account key. It is created once you create an account on Firekast dashboard. This key is needed for mobile SDK initialization.

It is available in Firekast dashboard and looks like `c8178e40-0ccf-35e7-a17c-5b26c0cf5f87`.

<aside class="warning">
Keep it private, do not share widely!
</aside>

## applicationId

The id that uniquely identifies an application.

It is available in the Firekast dashboard and looks like `e8078520-0ccf-35e7-8493-034e3c17d8c0`.

## streamId

The id that uniquely identifies a stream in your application. See [stream.id](#id).

It is available in the Firekast dashboard, within your application and looks like `d17j39tg4noar25g3`.

## Active users

Each device (mobile or web) that reaches our server is counted as a new active user once a month. This is used for measure plan threshold.

# Installation

<blockquote class="lang-specific swift">
<p>1. edit your podfile</p>
</blockquote>

```swift
use_frameworks!
```

```swift
# Set the same version name X.Y.Z. for both Firekast and VideoCore pod. Here 1.1.0.
pod 'Firekast', :podspec => 'http://firekast.io/sdk/ios/v1.1.0/Firekast.podspec'
pod 'VideoCore', :git => 'https://github.com/Firekast-io/VideoCore.git', :tag => 'fk-1.1.0'

# Please note, first `pod install` may be long, please be patient :)
```

<blockquote class="lang-specific swift">
<p>2. run in terminal</p>
</blockquote>

```swift
pod install
```

<blockquote class="lang-specific swift">
<p>3. initialize the SDK</p>
</blockquote>

```swift
import Firekast
```

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
  Firekast.initialize(clientKey: "YOUR_CLIENT_KEY", applicationId: "YOUR_APPLICATION_ID")
}
```

<blockquote class="lang-specific swift">
<p>4. specify camera and microphone usage description in your info.pList</p>
</blockquote>

```swift
<key>NSCameraUsageDescription</key>
<string>Camera usage description</string>
<key>NSMicrophoneUsageDescription</key>
<string>Microphone usage description</string>
```

<blockquote class="lang-specific java">
<p>1. edit your project root build.gradle</p>
</blockquote>

```java
allprojects {
    repositories {
        [...]
        maven { url 'https://dl.bintray.com/firekast/android' }
    }
}
```

<blockquote class="lang-specific java">
<p>2. edit your app build.gradle</p>
</blockquote>

```java
dependencies {
    implementation 'io.firekast:firekast:1.0.0'
    implementation 'com.google.android.exoplayer:exoplayer:r1.5.0'
}
```

<blockquote class="lang-specific java">
<p>3. initialize the SDK</p>
</blockquote>

```java
Firekast.initialize(this, "YOUR_CLIENT_KEY", "YOUR_APPLICATION_ID", Log.VERBOSE);
```

<blockquote class="lang-specific javascript">
<p>1. installation</p>
<p>Option a. npm</p>
</blockquote>

```javascript
npm install --save firekast-player
```

<blockquote class="lang-specific javascript">
<p>Option b. CDN</p>
</blockquote>

```javascript
<head>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/firekast@latest/dist/fkplayer.min.js"></script>
</head>
```

<blockquote class="lang-specific javascript">
<p>2. initialize the SDK</p>
<p>Option a. WEB</p>
</blockquote>

```javascript
<script>
  var config = {
    applicationId: "YOUR_APPLICATION_ID"
  };
  Firekast.initializeApp(config);
  (inspired from firebase init: https://firebase.google.com/docs/web/setup#add_firebase_to_your_app)
</script>
```

<blockquote class="lang-specific javascript">
<p>2. initialize the SDK</p>
<p>Option b. Node.js</p>
</blockquote>

```javascript
// To use the module in your application, require it from any JavaScript file:
var firebase = require("firebase");
// If you are using ES2015, you can import the module instead:
import * as firebase from "firebase";

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  storageBucket: "<BUCKET>.appspot.com",
};
firebase.initializeApp(config);
```

We use common dependency managers to distribute our SDKs, so installation is fast forward.

[Cocoapods](https://guides.cocoapods.org/using/getting-started.html) for iOS, [Gradle](https://developer.android.com/studio/build/dependencies.html) for android, [npm](https://docs.npmjs.com/getting-started/installing-node) for js.

<aside class="notice">
You must replace <code>YOUR_CLIENT_KEY</code> with your personal clientKey, available in the Firekast dashboard.</a>.
</aside>

<aside class="notice">
You must replace <code>YOUR_APPLICATION_ID</code> with your app's id, available in the Firekast dashboard.
</aside>

<aside class="notice">
To activate the javascript SDK, you must add your website domains (eg. https://www.pscp.tv) so only your app is able to make requests. This can be done in your dashboard app settings.
</aside>

# Getting Started

## Live stream

```swift
let streamer = FKStreamer() // 1. initializes streamer
let camera = streamer.showCamera(.front, in: myView) // 2. open camera inside myView

streamer.requestStream { (stream, error) in // 3. create a stream
    streamer.startStreaming(on: stream, delegate: self) // 4. start streaming firekast
}
```

```java
// 1. get fragment from layout
mCameraFragment = (FKCameraFragment) getSupportFragmentManager().findFragmentById(R.id.camera_fragment);
mCameraFragment.getCameraAsync(new FKCameraFragment.OnCameraReadyCallback() {
  @Override
  public void onCameraReady(@Nullable FKCamera camera, @Nullable FKError error) {
    // 2. get camera as soon as it's available
    mCamera = camera; 
  }
});
```

```java
mStreamer = mCameraFragment.getStreamer();
// 3. create a stream
mStreamer.requestStream(new FKStreamer.RequestStreamCallback() { 
  @Override
  public void done(@Nullable FKStream stream, @Nullable FKError error) {
    // 4. start streaming on firekast
    mStreamer.startStreaming(stream, new MyFKStreamingCallback());
  }
});
```

```javascript
// Not implemented yet
```

This is all you need to do to live stream your front camera 👉

First, you must request for a stream and then, call start streaming method whenever your User decides to.

## Live stream on social networks simultaneously

```swift
let fbLive = FKOutput.facebook(accessToken: "YOUR_FACEBOOK_TOKEN")
let ytLive = FKOutput.youtube(accessToken: "YOUR_YOUTUBE_TOKEN", title: "Awesome title")

streamer.requestStream(outputs: [fbLive, ytLive]) { (stream, error) in // 3. create a stream specifying outputs
    streamer.startStreaming(on: stream, delegate: self) // 4. start streaming on facebook, youtube and firekast
}
```

```java
FKOutput facebook = FKOutput.facebook("YOUR_TOKEN_FACEBOOK", null);
FKOutput youtube = FKOutput.youtube("YOUR_TOKEN_YOUTUBE", "Awesome title", null);

List outputs = new ArrayList<>();
outputs.add(facebook);
outputs.add(youtube);

// 3. create a stream specifying outputs
mStreamer.requestStream(outputs, new MyFKRequestStreamCallback());
```

```javascript
// Not implemented yet
```

Firekast allows to push your stream to several live streaming platform, such as Facebook or Youtube, simultaneously.

<aside class="notice">
A stream is always pushed to Firekast so it's available for your mobile or web app.
</aside>

## Access camera features

```swift
camera.position = .back // open back camera

camera.isMicrophoneEnabled = false // mute microphone

if camera.isFlashAvailable {
    camera.isFlashEnabled = true // turn flash on if available for the current camera
}
```

```java
mCamera.switchToPosition(Position.BACK); // open back camera

mCamera.setMicrophoneEnabled(false); // mute microphone

if (mCamera.isFlashAvailable()) {
    mCamera.setFlashEnabled(true); // turn flash on if available for the current camera
}
```

```javascript
// Not implemented yet
```

Adding camera often leads to boilerplate codes, especially on Android where you must pay attention on your Activity or Fragment lifecycle. 

Our SDK manages everything for you and provides simple interface to interact with most common used features.

## Watch live or replay as VOD

```swift
let player = FKPlayer() // 1. initialize player
player.show(in: myView) // 2. display player in myView

player.play(streamId: "THE_STREAM_ID", delegate: self) // 3. play the video 
```

```java
// 1. add the player in your layout
<io.firekast.FKPlayerView
    android:id="@+id/videoView"
    android:layout_width="200dp"
    android:layout_height="110dp" />

// 2. listen for player callback (optional) and play the video
mVideoView.setPlayerListener(new MyFKPlayerCallback());
mPlayerView.play("THE_STREAM_ID");
```

```javascript
<body>
  <div id="player"></div>
  <script>
    var player = new Firekast.Player({streamId: "THE_STREAM_ID", colorAccent: #ffb800, parentId: "#player"});
  </script>
</body>
```

The player will figure out whether the stream is live or vod and will adapt the player UI accordingly.

<aside class="notice">
Once a live is completed, the stream becomes quasi instantly available for VOD playback.
</aside>

# SDK | Stream

A stream describes one video content. A stream is unique and is associated to an application.

## id

This is the unique id of the object, see [streamId](#streamId). It is assigned when the Stream object is created, ie. when a stream is requested.

## state

During its life time, a stream goes though different states:

* waiting: the stream has been created and is waiting for a video to be streamed
* timeout: the stream has been waiting for too long and has been destroyed
* live
* processing: transitioning from live to vod
* vod

Stream's lifecycle can be either:

* waiting -> live -> processing -> vod
* waiting -> timeout

## metadata 

```swift
// Not implemented yet
```

```java
// Not implemented yet
```

```javascript
// Not implemented yet
```

You can use this parameter to attach key-value data to Stream objects. Metadata is useful for storing additional, structured information on an object. As an example, you could store your user's full name or stream title.

# SDK | Streamer

The streamer handles the stream creation and let you stream on your application.

## Request for a stream

```swift
streamer.requestStream()
```

```java
mStreamer.requestStream(new MyFKRequestStreamCallback());
```

```javascript
// Not implemented yet
```

Before being able to start streaming, you must request for a stream. This will create a stream on Firekast server.

This new created stream is immediatly visible in your dashboard.

## Specify outputs

```swift
streamer.requestStream(outputs: [])
```

```java
mStreamer.requestStream(listOfOutputs, new MyFKRequestStreamCallback());
```

```javascript
// Not implemented yet
```

Firekast lets you push your live stream to several live streaming platform, such as Facebook or Youtube, simultaneously.

If you want to repush on social networks, you must provide corresponding information so the server create a special stream.

## Start and stop streaming

> Start streaming

```swift
streamer.startStreaming(on: stream, delegate: self)
```

```java
mStreamer.startStreaming(stream, new MyFKStreamingCallback());
```

```javascript
// Not implemented yet
```

> Stop streaming

```swift
streamer.stopStreaming()
```

```java
mStreamer.stopStreaming()
```

```javascript
// Not implemented yet
```

Once you have created a stream, you can start streaming whenever your User is ready.

<aside class="notice">
Even if the SDK will detect this situation 💪, it is a good practice to call stop streaming method when your user moves away the app or the streaming screen.
</aside>

## Listen for events while streaming

```swift
func streamer(_ streamer: FKStreamer, willStartOn stream: FKStream?, unless error: FKError?) {
  // ...
}

func streamer(_ streamer: FKStreamer, didStopOn stream: FKStream?, error: FKError?) {
  // ...
}

func streamer(_ streamer: FKStreamer, networkQualityDidUpdate rating: Float) {
  // ...
}
```

```java
private class MyStreamingCallback implements FKStreamer.StreamingCallback {
  @Override
  public void onSteamWillStartUnless(@Nullable FKStream stream, @Nullable FKError error) {
    // ...
  }

  @Override
  public void onStreamDidStop(FKStream stream, FKError error) {
    // ...
  }

  @Override
  public void onStreamingUpdateAvailable(boolean lag) {
    // ...
  }
}
```

```javascript
// Not implemented yet
```

When start streaming you might want to adapt your UI depending on events. You will be notified whether the streaming starts properly, stops normally or prematurely, and streaming conditions.

<aside class="notice">
A stream can be stopped by the SDK if network conditions has been low for too long), on the dashboard, or by the server. So you should adapt your UI/UX accordingly.
</aside>

# SDK | Player

The player lets you play any stream of your current application. Whether the stream is live or VOD, the player will figure it out and adapt its UI.

## Initialization

<blockquote class="lang-specific swift">
<p>The player is a wrap arount <code><a href="https://developer.apple.com/documentation/mediaplayer/mpmovieplayercontroller">MPMoviePlayerController</a></code>, and is even simpler to use.</p>
</blockquote>

```swift
override func viewDidLoad() {
  super.viewDidLoad()
  player = FKPlayer()
  player.show(in: playerContainerView)
}
```

<blockquote class="lang-specific java">
<p>The player is based on <code><a href="https://github.com/google/ExoPlayer">ExoPlayer</a></code> and is wrapped into a simple view.</p>
</blockquote>

```java
<io.firekast.FKPlayerView
  android:id="@+id/videoView"
  android:layout_width="match parent" 
  android:layout_height="110dp" />
```

<blockquote class="lang-specific javascript">
<p>The player is a wrap around <code><a href="https://github.com/clappr/clappr">clappr</a></code>.</p>
</blockquote>

```javascript
<style>
  #player {
    width: 160px;
    height: 90px;
  }
</style>
<body>
  <div id="player"></div>
  <script>
    var playerJS = new Firekast.Player({parentId: "#player", streamId: "THE_PLAYER_ID", accentColor: #ffb800});
  </script>
</body>
```

For each platform, we wrap the most common player so we expose only methods that count.

<aside class="notice">
Video ratio is 16:9. If your view does not fit this ratio, the player automatically centers inside the video adding (eventually) black bars.
</aside>

<aside class="notice tab-swift">
On iOS, the player can play only one video at a time.
</aside>

## Play and stop

```swift
player.play(streamId: "THE_STREAM_ID", delegate: self)
```

```swift
player.stop()
```

```java
mPlayerView.play("THE_STREAM_ID");
```

```java
mPlayerView.stop();
```

```javascript
playerJS.play();
```

```javascript
playerJS.stop();
```

The player aims to be very simple. 

Call play by providing the [streamId](#streamId). The player will first fetch the stream, determines whether it's live or vod, and starts to play. 

The playback controller UI automatically adapts whether the player is playing a live or vod stream.

<aside class="notice">
Replace <code>THE_STREAM_ID</code> with the stream-you-want-to-watch's id.
</aside>

## Listen for player events

```swift
func player(_ player: FKPlayer, stateDidChanged state: FKPlayer.State) {
  // ...
}

func player(_ player: FKPlayer, videoDurationIsAvailable duration: TimeInterval) {
  // ...
}

func player(_ player: FKPlayer, willPlay stream: FKStream?, unless error: FKError?) {
  // ...
}
```

```java
mPlayerView = (FKPlayerView) findViewById(R.id.videoView);
mPlayerView.setPlayerListener(new FKPlayerView.Callback() {
  @Override
  public void onPlayerWillPlay(@Nullable FKStream stream, @Nullable FKError error) {
    // ...
  }
});
```

```javascript
???
```

You may want to listen for player callback so you can adapt adapt your UI accordingly. Indeed, since the stream is fetched internally to determine whether its live, vod, etc... the request can fail. There is no retry strategy so you may notify your user about the failure.
