---
title: Documentations

language_tabs: # must be one of https://git.io/vQNgJ
  - swift: iOS
  - java: android
  - javascript

toc_headers:
  - <a href='https://firekast.io/'>🏡 firekast.io</a>
  - <a href='https://dashboard.firekast.io/'>🖥️  Access your dashboard</a>
  
toc_footers:
  - <ul>API Reference<li><a href="https://firekast.io/sdk/ios/docs">iOS</a></li><li><a href="https://firekast.io/sdk/android/docs">Android</a></li></ul>
  - <p>Made with 🍕 in Paris, <a href="http://www.agoranov.com/#startup">Agoranov</a></p>

search: false

includes:
  - release_notes_ios
  - release_notes_android
  - release_notes_js

---

# Welcome

Welcome to Firekast! The best developer tools to bring live video streaming into your app without being a video expert. 

Firekast is a Video as a Service platform, we provide iOS and Android SDKs to wrap camera usage, streaming, video encoding and player into something sweet and easy to use. Yes, you are 5 minutes away to make the next Periscope 😎

We obsesses over developer experience and want this documentation to be as clear as possible. If you have any question, suggestion, feature request, feel free to [contact us](https://firekast.zendesk.com/hc/en-gb/requests/new), we would love to hear from you.

# Firekast Basics

Before we start, let's introduce some Firekast basics concepts. You may already be familiar with since we designed our service with well known SaaS platforms in mind.

*Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less. -- Marie Curie*

## API key

The API key allows you to make a restricted set of calls through our REST API. 
The API only allows calls to get streams for playback, typically for use with our JS Player.

<aside>
With custom authorizations, our APIs can be used on your backend to list your streams and manage your applications.
<a href="https://firekast.zendesk.com/hc/en-gb/requests/new">contact us</a> to discuss your needs.
</aside>

<aside>
The API key is not intended to be used with the Android or iOS SDKs, for these you should use the [clientKey](#clientkey) as detailed below.
</aside>

## clientKey

This is your private account key. It is created once you create an account on Firekast dashboard. This key is needed for mobile SDK initialization.

It is available in Firekast dashboard and looks like `c8178e40-0ccf-35e7-a17c-5b26c0cf5f87`.

<aside class="warning">
Keep your client key it private, do NOT share it!
</aside>

## Application

On your dashboard, you can create as many applications as you like. An application is identified with its unique **applicationId** and gathers all the streams you have made using this id.

To create an application, you must specify a *name* (usually your company name or app name), and specify a *plan* (free or paying, see [pricing](https://firekast.zendesk.com/hc/en-gb/requests/new)). Each of these information can be edited later.

An application can be deleted if you decide so.

<aside class="warning">
If an application is deleted, all the videos it contains will be deleted as well.
</aside>

## applicationId

The id that uniquely identifies an application.

It is available in the Firekast dashboard and looks like `e8078520-0ccf-35e7-8493-034e3c17d8c0`.

## streamId

The id that uniquely identifies a stream in your application. See [stream.id](#id).

It is available in the Firekast dashboard, within your application and looks like `d17j39tg4noar25g3`.



## Active users

Each new device (mobile or web) that reaches our server is counted as a new active user once a month.

# Getting Started

## Installation

<blockquote class="lang-specific swift">
<p>1. Edit your podfile</p>
</blockquote>

```swift
use_frameworks!
```

```swift
# Set the same version name X.Y.Z. for both Firekast and VideoCore pod.
pod 'Firekast', :podspec => 'http://firekast.io/sdk/ios/v1.4.0/Firekast.podspec'
pod 'VideoCore', :git => 'https://github.com/Firekast-io/VideoCore.git', :tag => 'fk-1.4.0'

# Please note, first `pod install` may be long, please be patient :)
```

<blockquote class="lang-specific swift">
<p>2. Run in terminal</p>
</blockquote>

```swift
pod install
```

<blockquote class="lang-specific swift">
<p>3. Specify camera and microphone usage description in your <code>info.pList</code></p>
</blockquote>

```swift
<key>NSCameraUsageDescription</key>
<string>Camera usage description</string>
<key>NSMicrophoneUsageDescription</key>
<string>Microphone usage description</string>
```

<blockquote class="lang-specific swift">
<p>4. Initialize the SDK</p>
</blockquote>

```swift
import Firekast
```

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
  Firekast.initialize(clientKey: "YOUR_CLIENT_KEY", applicationId: "YOUR_APPLICATION_ID")
}
```

<blockquote class="lang-specific java">
<p>1. Edit your project root build.gradle</p>
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
<p>2. Edit your app build.gradle</p>
</blockquote>

```java
dependencies {
  implementation('io.firekast:firekast:1.4.0') // {
  //   exclude group: "com.android.support"
  // }
  // ☝️ Uncomment above lines if targeting API 26 and below
}
```

<blockquote class="lang-specific java">
<p>3. Add camera, record audio and internet permission in your <code>AndroidManifest.xml</code></p>
</blockquote>

```java
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.INTERNET" />
```

<blockquote class="lang-specific java">
<p>4. Initialize the SDK</p>
</blockquote>

```java
Firekast.initialize(this, "YOUR_CLIENT_KEY", "YOUR_APPLICATION_ID");
```

<blockquote class="lang-specific javascript">
<p>1a. Import with <code>script</code> tag</p>
</blockquote>

```javascript
<script src="https://firekast.io/sdk/js/latest/firekast.min.js"></script>
```

<blockquote class="lang-specific javascript">
<p>1b. Import with <a href="https://webpack.github.io/" target="blank">Webpack</a>, <a href="http://browserify.org/" target="blank">Browserify</a>...</p>
</blockquote>

```javascript
const Firekast = require('firekast');
```

<blockquote class="lang-specific javascript">
<p>1c. Import with <a href="http://requirejs.org/docs/whyamd.html" target="blank">AMD</a> module syntax</p>
</blockquote>

```javascript
define(["firekast"], function(Firekast) { 
  //... 
});
```

<blockquote class="lang-specific javascript">
<p>2. Initialize the SDK</p>
</blockquote>

```javascript
Firekast.init({
  api_key: 'YOUR_API_KEY'
});
```

<p class="lang-specific swift">Firekast iOS SDK is distributed via <a href="https://guides.cocoapods.org/using/getting-started.html">Cocoapods</a>.</p>

<p class="lang-specific java">Firekast Android SDK is distributed via <a href="https://developer.android.com/studio/build/dependencies.html">Gradle</a>.</p>

<p class="lang-specific javascript">Several options are available to import Firekast Javascript SDK in your project.<br/><br/>Note that the JS SDK is not yet available on the public npm registry. Please, <a href="https://firekast.zendesk.com/hc/en-gb/requests/new">let us know</a> if you would love so.</p> 

<aside class="notice lang-specific javascript">
You must replace <code>YOUR_API_KEY</code> with your personal <a href="#api-key">API key</a>, available in the Firekast dashboard.</a>.
</aside>

<aside class="notice lang-specific java swift">
You must replace <code>YOUR_CLIENT_KEY</code> and <code>YOUR_APPLICATION_ID</code> with your personal <a href="#clientkey">clientKey</a> and <a href="#applicationid">app's id</a>, both available in the Firekast dashboard.</aside>

<aside class="notice lang-specific swift">
Min Deployment Target: iOS 8.0 >=
</aside>

<aside class="notice lang-specific java">
Min Android SDK: 16 >=
</aside>

<!--
<aside class="notice">
To activate the javascript SDK, you must add your website domains (eg. https://www.pscp.tv) so only your app is able to make requests. This can be done in your dashboard app settings.
</aside>
-->

## Live stream

```swift
let streamer = FKStreamer(usecase: .portrait) // 1. initializes streamer
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

<blockquote class="lang-specific javascript">
<p>The javascript SDK currently only supports <a href="#watch-live-or-replay-as-vod">live and vod</a> content playback, not publishing.</p>
</blockquote>

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

Adding camera often leads to boilerplate codes, especially on Android where you must pay attention on your Activity or Fragment lifecycle. 

Our SDK manages everything for you and provides simple interface to interact with  commonly used features.

## Watch live or replay as VOD

```swift
let player = FKPlayer() // 1. initialize player
player.show(in: myView) // 2. display player in myView
player.delegate = self

let stream = FKStream(withoutDataExceptStreamId: "STREAM_ID")
player.play(stream) // 3. play the video starting - in that example - from the beginning.
```

```java
// 1. add the player view in your layout
<io.firekast.FKPlayerView
    android:id="@+id/playerView"
    android:layout_width="200dp"
    android:layout_height="110dp" />

// 2. get the player from the view
mPlayer = mPlayerView.getPlayer();
mPlayer.setCallback(new MyPlayerCallback());

// 3. play the stream starting - in that example - from the beginning.
FKStream stream = FKStream.newEmptyInstance("STREAM_ID")
mPlayer.play(stream);
```

<blockquote class="lang-specific javascript">
<p>The player wraps around <code><a href="https://github.com/clappr/clappr">clappr</a></code>.</p>
</blockquote>
```javascript
<div id="player"></div>
<script>
  Firekast.API.init({
    api_key: 'YOUR_API_KEY'
  });
  const player = new Firekast.Player({
    parent_id:   '#player',
    stream_id:   'THE_STREAM_ID'
  });
</script>
```

The player will figure out whether the stream is live or vod and will adapt the player UI accordingly.

<aside class="notice">
Once a live is completed, the stream becomes instantly available for VOD playback.
</aside>

# SDK | Stream

<blockquote class="lang-specific">
 <p>Our APIs can be used on your backend to list your streams and manage your applications.</p>
 <p><a href="https://firekast.zendesk.com/hc/en-gb/requests/new" target="blank">Contact us to discuss your needs.</a></p>
</blockquote>

A stream describes one video content. A stream is unique and is associated to an application.

## id

This is the unique id of the object, see [streamId](#streamId). It is assigned when the [Stream object is created](#request-for-a-stream).

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


# SDK | Streamer

<blockquote class="lang-specific javascript">
<p>The javascript SDK currently only supports <a href="#watch-live-or-replay-as-vod">live and vod</a> content playback, not publishing.</p>
</blockquote>

The streamer handles the stream creation and let you stream on your application.

## Create streams

```swift
streamer.requestStream()
```

```java
mStreamer.requestStream(new MyFKRequestStreamCallback());
```

Before being able to start streaming, you must first create a stream. This will create a stream on Firekast server.

This newly created stream is immediatly visible in your dashboard.

## Start and stop streaming

<blockquote class="lang-specific swift java">
<p>Start streaming</p>
</blockquote>

```swift
streamer.startStreaming(on: stream, delegate: self)
```

```java
mStreamer.startStreaming(stream, new MyFKStreamingCallback());
```

<blockquote class="lang-specific swift java">
<p>Stop streaming</p>
</blockquote>

```swift
streamer.stopStreaming()
```

```java
mStreamer.stopStreaming()
```

Once you have created a stream, you can start streaming whenever your User is ready.


## Events while streaming

```swift
func streamer(_ streamer: FKStreamer, willStart stream: FKStream?, unless error: NSError?) {}
func streamer(_ streamer: FKStreamer, didBecomeLive stream: FKStream) {}
func streamer(_ streamer: FKStreamer, didStop stream: FKStream?, error: NSError?) {}
func streamer(_ streamer: FKStreamer, networkQualityDidUpdate rating: Float) {}
```

```java
private class MyStreamingCallback implements FKStreamer.StreamingCallback {
  @Override
  public void onSteamWillStartUnless(@Nullable FKStream stream, @Nullable FKError error) {}
  
  @Override
  public void onStreamDidBecomeLive(@NonNullable FKStream stream) {}
  
  @Override
  public void onStreamDidStop(@Nullable FKStream stream, FKError error) {}
  
  @Override
  public void onStreamingUpdateAvailable(boolean lag) {}
}
```

When start streaming you might want to adapt your UI depending on events. You will be notified whether the streaming starts properly, stops normally or prematurely, and streaming conditions.

<aside class="notice">Once <code>startStreaming</code> is called, frames are sent to Firekast’s servers. We guarantee that frames are stored and that stream is live as soon as stream's state is <code>live</code>, SDK provides <code>didBecomeLive</code> callback for that.</aside>

<aside class="notice">
A stream can be stopped by the SDK if network conditions has been low for too long), on the dashboard, or by the server. So you should adapt your UI/UX accordingly.
</aside>

## Restream social

```swift
streamer.requestStream(outputs: [])
```

```java
mStreamer.requestStream(listOfOutputs, new MyFKRequestStreamCallback());
```

Firekast lets you push your live stream to several live streaming platform, such as Facebook or Youtube, simultaneously.

If you want to repush on social networks, you must provide corresponding information so the server could create a special stream.

## Test bandwidth

<blockquote class="lang-specific swift java">
<p>First, use <code>testBandwidth</code> method to start streaming on a test stream (content is not recorded).</p>
</blockquote>

```swift
let testDuration: TimeInterval = 10
streamer.testBandwidth(duration: testDuration, delegate: self)
```

```java
long testDuration = 15000;
mStreamer.testBandwidth(testDuration, this);
```
<blockquote class="lang-specific swift">
<p>Then, watch <code>FKStreamerDelegate</code> and average <code>rating</code> values to estimate whether User streaming condition is good enough.</p>
</blockquote>

<blockquote class="lang-specific java">
<p>Then, watch <code>FKStreamer.Callback</code> and count how often lag is `true`. A lag is fired each time the SDK encounters difficulty to send a frame, meaning bad network conditions.</p>
</blockquote>

```swift
func streamer(_ streamer: FKStreamer, networkQualityDidUpdate rating: Float) {
    // rating from 0 (bad) to 1 (excellent network conditions)
  }
```

```java
@Override
public void onStreamingUpdateAvailable(boolean lag) {
  // check for lag == true occurences. Too often is bad.
}
```

Call `testBandwidth` method to simulate live streaming and estimate User's current bandwidth quality by watching streamer callback.

What's behind the scene? 

This method puts User in real streaming conditions by starting streaming camera frames and audio to Firekast servers but nothing is actually recorded.

<aside class="notice">
We recommand test duration to be between 2 and 30 seconds. The longer the more accurate.
</aside>

# SDK | Player

The player lets you play any stream of your current application. Whether the stream is live or VOD, the player will figure it out and adapt its UI.

## Initialization

```swift
override func viewDidLoad() {
  super.viewDidLoad()
  player = FKPlayer()
  player.delegate = self
  player.show(in: playerContainerView)
}
```

<blockquote class="lang-specific java">
<p>The player is based on <code><a href="https://github.com/google/ExoPlayer">ExoPlayer</a></code> and is wrapped into a simple view.</p>
</blockquote>

```java
// In your layout:

<io.firekast.FKPlayerView
  android:id="@+id/playerView"
  android:layout_width="match parent" 
  android:layout_height="110dp" />

// Then in your code:

mPlayerView = (FKPlayerView) findViewById(R.id.playerView);
mPlayer = mPlayerView.getPlayer();
```

<blockquote class="lang-specific javascript">
<p>The player wraps around <code><a href="https://github.com/clappr/clappr">clappr</a></code>.</p>
</blockquote>

```javascript
<div id="player"></div>
<script>
  Firekast.API.init({
    api_key: 'YOUR_API_KEY'
  });
  const player = new Firekast.Player({
    parent_id:   '#player',
    stream_id:   'THE_STREAM_ID'
  });
</script>
```

For each platform, we wrap the most common player so we expose only methods that count.

<aside class="notice">
Video ratio is 16:9. If your view does not fit this ratio, the player automatically fit inside the video with automatic padding to maintain its ratio.
</aside>

<aside class="notice lang-specific swift">
The player is based on <code><a href="https://developer.apple.com/documentation/avkit/avplayerviewcontroller">AVPlayerViewController</a></code>.
</aside>

<aside class="notice lang-specific javascript">
Replace <code>THE_STREAM_ID</code> with the stream-you-want-to-watch's id.
</aside>

## Play and stop

```swift
let stream = FKStream(withoutDataExceptStreamId: "STREAM_ID")
player.play(stream)
```

```swift
player.pause()
player.resume()
```

```swift
// import CoreMedia
player.seek(to: CMTime(seconds: 30, preferredTimescale: 1))
```

```java
FKStream stream = FKStream.newEmptyInstance("THE_STREAM_ID")
mPlayer.play(stream);
```

```java
mPlayer.pause();
mPlayer.resume();
```

```java
mPlayer.seek(TimeUnit.SECONDS.toMillis(30));
```

```javascript
player.on('ready', () => {
  player.play();
});
```

```javascript
player.stop();
```

<blockquote class="lang-specific javascript">
<p>The following methods are also available.</p>
</blockquote>

```javascript
player.pause()
player.seek(seconds:Number)
player.mute()
player.setVolume(percent:Number)
player.getCurrentTime():Number
player.getDuration():Number
player.isPlaying():Boolean
player.destroy()
```

The player aims to be very simple. 

Play a stream. The player will fetch the stream (if necessary) and start playing right away.

The playback controller UI automatically adapts whether the player is playing a live or VOD stream.

Once playing, video can be paused and resumed programmatically if needed.

Use <code>seek</code> to set the current playback time to a specified time.

<aside class="notice lang-specific swift java">
Replace <code>THE_STREAM_ID</code> with the stream-you-want-to-watch's id.
</aside>

## Listen for player events

```swift
func player(_ player: FKPlayer, stateDidChanged state: FKPlayer.State) {}
func player(_ player: FKPlayer, videoDurationIsAvailable duration: TimeInterval) {}
func player(_ player: FKPlayer, willPlay stream: FKStream, unless error: NSError?) {}
```

```java
mPlayer.setCallback(new FKPlayer.Callback() {
  @Override
  public void onPlayerWillPlay(@NonNull FKStream stream, @Nullable FKError error) {}
  @Override
  public void onPlayerStateChanged(@NonNull FKPlayer.State state) {}
});
```

```javascript
const events = [
  'ready',
  'play',
  'stop',
  'ended',
  'error',
  'timeupdate',
  'volumechange',
  'seek',
  'resize'
];

events.forEach( event => {
  player.on('ready', () => console.log(`Player emitted ${event}`));
});

player.on('ready', () => player.play());

```

You may want to listen for player callback so you can adapt adapt your UI accordingly. Indeed, since the stream is fetched internally to determine whether its live, vod, etc... the request can fail. There is no retry strategy so you may notify your user about the failure.

## UI Customization

```swift
player.videoGravity = .resizeAspectFill
player.showPlaybackControls = false
```

```java
mPlayer.setShowPlaybackControls(true); // default is true
mPlayer.setPlaybackControlsMargins(...); // default is 8dp
mPlayer.setPlaybackControlsBackground(R.drawable.my_player_controls_background); // default is a 8dp rounded semi-transparent black rectangle
```

```javascript
const player = new Firekast.Player({
  [...]
  clappr_config: {
    mediacontrol: { seekbar: "#E113D3", buttons: "#66B2FF" }
  }
});
```

We provide basic customization of the playback controls UI.

<p class="lang-specific swift">Note that <code><a href="https://developer.apple.com/documentation/avkit/avplayerviewcontroller">AVPlayerViewController</a></code> provides very little control over the UI. We only wrapped what we found useful.</p>

<p>Please <a href="mailto:contact@firekast.io">let us know</a> if you need more control over the player UI.</p>

<aside class="notice lang-specific swift java">
<code>FKPlayer</code> provides all the tools (resume, pause, seek) to let you eventually build your custom playback controls.
</aside>

# Release Notes

Follow on the right panel what's new in releases.