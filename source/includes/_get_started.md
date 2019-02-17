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
pod 'Firekast', :podspec => 'https://firekast.io/sdk/ios/vX.Y.Z/Firekast.podspec'
pod 'VideoCore', :git => 'https://github.com/Firekast-io/VideoCore.git', :tag => 'fk-X.Y.Z'

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
  Firekast.initialize(privateKey: "YOUR_APP_PRIVATE_KEY")
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
  implementation('io.firekast:firekast:X.Y.Z') // {
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
Firekast.initialize(this, "YOUR_APP_PRIVATE_KEY");
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
  api_key: 'YOUR_APP_PUBLIC_KEY'
});
```

<p class="lang-specific swift">Firekast iOS SDK is distributed via <a href="https://guides.cocoapods.org/using/getting-started.html">Cocoapods</a>.</p>

<p class="lang-specific java">Firekast Android SDK is distributed via <a href="https://developer.android.com/studio/build/dependencies.html">Gradle</a>.</p>

<p class="lang-specific javascript">Several options are available to import Firekast Javascript SDK in your project.<br/><br/>Note that the JS SDK is not yet available on the public npm registry. Please, <a href="https://firekast.zendesk.com/hc/en-gb/requests/new">let us know</a> if you would love so.</p> 

<p class="lang-specific swift">
For <strong>Objective-C</strong> projects:
</p>
<ul class="lang-specific swift"><li>Set <code>Always Embed Swift Standard Libraries</code> to <code>Yes</code> in your project Build Settings. Otherwise you will encounter a <code>dyld: Library not loaded</code> error.</li>
<li>Use <code>#import "Firekast/Firekast-Swift.h"</code> to import Firekast SDK in your code.</li></ul>

<aside class="notice lang-specific javascript">
You must replace <code>YOUR_APP_PUBLIC_KEY</code> with your <a href="#api-keys">public key</a>, available in app's settings in your dashboard.</a>.
</aside>

<aside class="notice lang-specific java swift">
You must replace <code>YOUR_APP_PRIVATE_KEY</code> with your app <a href="#api-keys">private key</a>, available in app's settings in your dashboard.</aside>

<aside class="notice lang-specific java swift">
<strong>X.Y.Z</strong>: visit <a href="#release-notes">Release Notes</a> section to find out the latest version of the SDK.
</aside>

<aside class="notice lang-specific swift">
Min Deployment Target: iOS 8.0 >=
</aside>

<aside class="notice lang-specific java">
Min Android SDK: 19 >=
</aside>

## Live stream

```swift
// 1. Initializes the streamer
let streamer = FKStreamer(usecase: .portrait)

// 2. Open camera inside a view
let camera = streamer.showCamera(.front, in: aView) 

// 3. Create a stream and start streaming when ready
streamer.createStream { (stream, error) in 
  guard error == nil else { return } // Something went wrong, like you have reached your plan limit for example.
  streamer.startStreaming(on: stream, delegate: self)
}
```

```java
// 1. Load FKCameraFragment in your FrameLayout with id `camera_fragment`

@Override
protected void onCreate(Bundle savedInstanceState) {
  [...]
  FKCameraFragment cameraFragment = new FKCameraFragment();
  cameraFragment.getCameraAsync(this);
  getSupportFragmentManager().beginTransaction()
          .replace(R.id.camera_container, cameraFragment)
          .commit();
  [...]
} 

// 2. Get camera as soon as it's available

@Override
public void onCameraReady(@Nullable FKCamera camera, @Nullable FKStreamer streamer, @Nullable FKError error) {
  if (error != null) return; // Something went wrong, like device has no camera for example.  
  mCamera = camera;
  mStreamer = streamer;
}

// 3. Create a stream and start streaming when ready

public void handleClick(View view) {
  mStreamer.createStream(new FKStreamer.CreateStreamCallback() { 
    @Override
    public void done(@Nullable FKStream stream, @Nullable FKError error) {
      if (error != null) return; // Something went wrong, like you have reached your plan limit for example.
      mStreamer.startStreaming(stream, new AppStreamingCallback());
    }
  });
}
```

<blockquote class="lang-specific javascript">
<p>The javascript SDK currently only supports <a href="#watch-live-or-replay-as-vod">live and vod</a> content playback, not publishing.</p>
</blockquote>

This is all you need to do to live stream the device camera 👉

First, you must request for a stream and then, call start streaming method whenever your User decides to.

## Restream simultaneously

```swift
// 1. Checkout desired platforms API to create a RTMP link ready to receive a live stream.
let facebookRtmpLink = "rtmp://live-api-a.facebook.com:80/rtmp/143521800?ds=1&a=PEtMa1Ul0W3Rpa"
let youtubeRtmpLink = "rtmp://a.rtmp.youtube.com/live/hello_webcast"

// 2. Create a stream specifying restream outputs and start streaming when ready
streamer.createStream(outputs: [facebookRtmpLink, youtubeRtmpLink]) { (stream, error) in
  guard error == nil else { return } // Something went wrong, like you have reached your plan limit for example.
  streamer.startStreaming(on: stream, delegate: self)
}
```

```java
// 1. Checkout desired platforms API to create a RTMP link ready to receive a live stream.
String facebookRtmpLink = "rtmp://live-api-a.facebook.com:80/rtmp/143521800?ds=1&a=PEtMa1Ul0W3Rpa";
String youtubeRtmpLink = "rtmp://a.rtmp.youtube.com/live/hello_webcast";

// 2. Create a stream specifying restream outputs and start streaming when ready
List outputs = new ArrayList<>();
outputs.add(facebookRtmpLink);
outputs.add(youtubeRtmpLink);
mStreamer.createStream(outputs, new AppCreateStreamCallback());
```

Firekast allows to push your live stream simultaneously to other live streaming platforms, such as Facebook, Youtube, etc...

<aside class="notice">
Note that the stream remains pushed to Firekast so it's still accessible on your mobile or web app.
</aside>

<aside class="warning">
For the moment, Firekast allows <strong>3 restreams max</strong> per stream. Please <a href="https://firekast.zendesk.com/hc/en-gb/requests/new">contact us</a> if you need more.
</aside>

## Access camera features

```swift
camera.position = .back // opens back camera

camera.isAudioCaptureEnabled = false // mutes the microphone
camera.isVideoCaptureEnabled = false // turns camera off and streams a black screen

if camera.isFlashAvailable {
    camera.isFlashEnabled = true // turns flash on
}

camera.capture() // cheeeese!
```

```java
mCamera.switchToPosition(Position.BACK); // opens back camera

mCamera.setAudioCaptureEnabled(false); // mutes microphone
mCamera.setVideoCaptureEnabled(false); // turns camera off and streams a black screen

if (mCamera.isFlashAvailable()) {
    mCamera.setFlashEnabled(true); // turn flash on
}

mCamera.capturePreview(this) // cheeeese!
```

Adding camera often leads to boilerplate codes, especially on Android where you must pay attention on your Activity or Fragment lifecycle to release the Camera. 

Our SDK manages everything for you and provides a simple interface to interact with commonly used features.

## Watch live or replay as VOD

```swift
let player = FKPlayer() // 1. initialize player
player.show(in: aView) // 2. display player in myView
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
mPlayer.setCallback(new AppPlayerCallback());

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
    api_key: 'YOUR_APP_PUBLIC_KEY'
  });
  const player = new Firekast.Player({
    parent_id:   '#player',
    stream_id:   'THE_STREAM_ID'
  });
</script>
```

The player figures out whether the stream is live or VOD. Its UI gets updated accord accordingly.

<aside class="notice">
Once a live is completed, the stream becomes instantly available for VOD playback.
</aside>