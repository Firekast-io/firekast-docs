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