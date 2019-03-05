# SDK - Streamer

<blockquote class="lang-specific javascript">
<p>The javascript SDK currently only supports <a href="#watch-live-or-replay-as-vod">live and vod</a> content playback, not publishing.</p>
</blockquote>

The streamer is responsible for creating streams and actually sends frames and audio for live broadcasting.

## Create Streams

```swift
streamer.createStream()
```

```java
mStreamer.createStream(new AppCreateStreamCallback());
```

First step to do live broadcasting is to create a stream.

This call provisions server resources to handle live streaming, create and returns a [stream](#sdk-stream) with state `waiting`. Waiting for frames and audio to be sent.

This newly created stream is immediatly visible in your dashboard.

## Go Live

<blockquote class="lang-specific swift java">
<p>Start streaming</p>
</blockquote>

```swift
streamer.startStreaming(on: stream, delegate: self)
```

```java
mStreamer.startStreaming(stream, new AppStreamingCallback());
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

Then, stop streaming whenever your User is done.

<aside class="notice">
It is good practise to call <code>stopStreaming()</code> when User leaves the dedicated screen.
</aside>

## Events

```swift
func streamer(_ streamer: FKStreamer, willStart stream: FKStream, unless error: NSError?) {}
func streamer(_ streamer: FKStreamer, didBecomeLive stream: FKStream) {}
func streamer(_ streamer: FKStreamer, didStop stream: FKStream, error: NSError?) {}
func streamer(_ streamer: FKStreamer, didUpdateStreamHealth health: Float) {}
```

```java
private class AppStreamingCallback implements FKStreamer.StreamingCallback {
  @Override
  public void onSteamWillStartUnless(@NonNullable FKStream stream, @Nullable FKError error) {}
  
  @Override
  public void onStreamDidBecomeLive(@NonNullable FKStream stream) {}
  
  @Override
  public void onStreamDidStop(@NonNullable FKStream stream, FKError error) {}
  
  @Override
  public void onStreamingUpdateAvailable(boolean lag) {}
}
```

Your app can rely on the streamer events to adapt its UI. Events notify whether the live broadcasting has started properly or failed, stopped normally or prematurely, and how the live stream is performing.

<aside class="notice">Once <code>startStreaming</code> is called, frames and audio are being sent to our server. However we guarantee that frames and audio are recorded (VOD) and are live as soon as stream's state is <code>live</code>. The SDK provides <code>didBecomeLive</code> callback for that.</aside>

<aside class="notice">
Since a stream can be stopped in many ways (SDK, dashboard, server), it is important to rely `didStop` callback to update your UI.
</aside>

## Restream

```swift
streamer.createStream(outputs: listOfRtmpLink) { (stream, error) in 
 // ...
}
```

```java
mStreamer.createStream(mListOfRtmpLink, new AppCreateStreamCallback());
```

Firekast allows to push your live stream simultaneously to other live streaming platforms, such as Facebook, Youtube, etc...

Refer to the targeted platform API docs to find out how to generate a live stream and get its RTMP link.

<aside class="notice">
Note that the stream remains pushed to Firekast so it's still accessible on your mobile or web app.
</aside>

<aside class="warning">
For the moment, Firekast allows <strong>3 restreams max</strong> per stream. Please <a href="https://firekast.zendesk.com/hc/en-gb/requests/new">contact us</a> if you need more.
</aside>

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