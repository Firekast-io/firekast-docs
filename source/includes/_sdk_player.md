# SDK - Player

The player lets you play any stream of your current application. Whether the stream is live or VOD, the player will figure it out and adapt its UI.

## Initialization

<blockquote class="lang-specific objective_c swift">
<p>The player is based on <code><a href="https://developer.apple.com/documentation/avkit/avplayerviewcontroller">AVPlayerViewController</a></code>.</p>
</blockquote>

```swift
override func viewDidLoad() {
  super.viewDidLoad()
  player = FKPlayer()
  player.delegate = self
  player.show(in: playerContainerView)
}
```

```objective_c
- (void)viewDidLoad {
  [super viewDidLoad];
  _player = [[FKPlayer alloc] init];
  [_player setDelegate:self];
  [_player showIn:_ibPlayerView];
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
    public_key: 'YOUR_APP_PUBLIC_KEY'
  });
  const player = new Firekast.Player({
    parent_id:   '#player',
    stream_id:   'STREAM_ID'
  });
</script>
```

For each platform, we wrapped the most common player and its methods to make it simpler and expose what's count.

<aside class="notice">
Video ratio is 16:9. If your view does not fit this ratio, the player automatically fit inside the video with automatic padding to maintain its ratio.
</aside>

## Play and Stop

```swift
let stream = FKStream(withoutDataExceptStreamId: "STREAM_ID")
player.play(stream)
```

```swift
player.pause()
player.resume()
```

```swift
import CoreMedia

player.seek(to: CMTime(seconds: 30, preferredTimescale: 1))
```

```objective_c
FKStream* stream = [[FKStream alloc] initWithWithoutDataExceptStreamId:"STREAM_ID"];
[_player play:stream at:kCMTimeZero];
```

```objective_c
[_player resume];
[_player pause];
```

```objective_c
#import "CoreMedia/CoreMedia.h"

[_player play:stream at:CMTimeMake(30, 1)];
```

```java
FKStream stream = FKStream.newEmptyInstance("STREAM_ID")
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

Call `play` to start playing the stream right away, whether the stream is live or VOD.

The playback controller UI adapts automatically depending on the state of the stream.

Once playing, video can be paused and resumed programmatically if needed.

Use <code>seek</code> to set the current playback time to a specified time.

When playing a live that finally reaches its ends, the playback stops at the end of the live and allows to replay the stream as a VOD.

<aside class="notice">
Replace <code>STREAM_ID</code> with the streamId of the stream you want to watch.
</aside>

## Player Events

```swift
func player(_ player: FKPlayer, willPlay stream: FKStream, unless error: Error?) {}    
func player(_ player: FKPlayer, stateDidChanged state: FKPlayer.State) {}
```

```objective_c
- (void)player:(FKPlayer *)player willPlay:(FKStream *)stream unless:(NSError *)error {}
- (void)player:(FKPlayer *)player stateDidChanged:(enum FKPlayerState)state {}
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

You may want to listen for player callback so you can update your UI accordingly. 

Note that the stream may need to be fetched (automatically by the SDK) first before it can be played. For some reason it is possible that the request fails. You should definitely notify your User about that failure so User can retry eventually.

## UI Customization

```swift
player.videoGravity = .resizeAspectFill
player.showPlaybackControls = false
```

```objective_c
[_player setVideoGravity:FKPlayerVideoGravityResizeAspectFill];
[_player setShowPlaybackControls:NO];
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

<p class="lang-specific objective_c swift">Note that <code><a href="https://developer.apple.com/documentation/avkit/avplayerviewcontroller">AVPlayerViewController</a></code> provides very little control over the UI. We only wrapped what we found useful.</p>

<p>Please <a href="mailto:contact@firekast.io">let us know</a> if you need more control over the player UI.</p>

<aside class="notice lang-specific objective_c swift java">
<code>FKPlayer</code> provides all the tools (<code>resume</code>, <code>pause</code>, <code>seek</code>, playback position) to let you eventually build your custom playback controls.
</aside>