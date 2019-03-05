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
Min Android SDK: 19 >=
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