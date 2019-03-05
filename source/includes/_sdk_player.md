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
    api_key: 'YOUR_APP_PUBLIC_KEY'
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