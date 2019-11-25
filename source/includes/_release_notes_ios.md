<blockquote class="lang-specific swift objective_c">
<p>v1.7.3<span>2019-11-25</span></p>
<pre>
Built with Swift 5.1.2 (Xcode 11.2.1).
Brings compability with Swift 5.1.2.
</pre>
</blockquote>

<blockquote class="lang-specific swift objective_c">
<p>v1.7.2<span>2019-10-24</span></p>
<pre>
Built with Swift 5.1 (Xcode 11.1).
Brings compability with Swift 5.1.
</pre>
</blockquote>

<blockquote class="lang-specific swift objective_c">
<p>v1.7.1<span>2019-06-01</span></p>
<pre>
Built with Swift 5.0.1 (Xcode 10.2.1).
* Streaming stopped before stream becomes <code>LIVE</code> causes the stream to be force closed. This helps us to release server's resources and free up spaces on your plan as soon as possible.
* Fixes the Firekast framework so it compiles and runs on simulators.
</pre>
</blockquote>

<blockquote class="lang-specific swift objective_c">
<p>v1.7.0<span>2019-04-24</span></p>
<pre>
Built with Swift 5.0 (Xcode 10.2).
* Player can be <code>muted</code>.
* By default, player starts to play immediately, otherwise call <code>play(self.stream, playImmediately: false)</code> to override this behavior.
* Fix player crash: 'Cannot remove an observer for the key path because it is not registered as an observer.'.
</pre>
</blockquote>

<blockquote class="lang-specific swift objective_c">
<p>v1.6.1<span>2019-04-09</span></p>
<pre>
Built with Swift 5.0 (Xcode 10.2).
* Support Swift 5.0
</pre>
</blockquote>

<blockquote class="lang-specific swift objective_c">
<p>v1.6.0<span>2019-03-20</span></p>
<pre>
Built with Swift 4.2.1 (Xcode 10.1).
* Security: new API auth keys available in your app settings. Use <code>privateKey</code> to initialize the SDK instead of deprecated <code>clientKey</code> and <code>applicationID</code>. This key must remain confidential.
* Errors: description readibility has been improved to help support.
* Restream: we decided to let you choose the platform to which you want to live stream. You are no longer dependent on our implementation, provide us with the RTMP link and that's it. So <code>FKOutput</code> has been abandonned.
* Delegate's methods in Swift code now support <code>Error</code> instead of <code>NSError</code>.
* Test Bandwidth: start streaming on <code>FKStream.bandwidthTest</code> stream and observe <code>FKStreamerDelegate.didUpdateStreamHealth(...)</code>.
* <code>FKStreamer</code>:
  * <code>requestStream</code> becomes <code>createStream</code>.
  * <code>stream</code> in delegate's methods is no more optional since it is actually always known.
  * <code>quality</code>: ability to change the quality for the next created streams.
  * We have replaced the network quality measure with the notion of stream health. Method <code>networkQualityDidUpdate</code> becomes <code>didUpdateStreamHealth</code>. <strong>We consider that 70% is the minimum rate for a healthy live stream.</strong> Moreover, this value has become more reliable.
  * Objective-C streamer orientation constants are now prefixed with <code>FKStreamerOrientation</code>.
* <code>FKStream</code>: 
  * Query for your app's streams using <code>findAll(...)</code>.
  * <code>forceClose()</code> allows to force close a stream in case your User created a stream and you know for sure that User will finally not go live.
  * Objective-C <code>FKStream</code>'s <code>streamId</code> becomes <code>id</code>.
</pre>
</blockquote>

<blockquote class="lang-specific swift objective_c">
<p>v1.5.0<span>2019-01-25</span></p>
<pre>
Built with Swift 4.2.1 (Xcode 10.1).
* Abality to disable video capture while streaming with <code>isVideoCaptureEnabled</code>.
* Renaming <code>isMicrophoneEnabled</code> into <code>isAudioCaptureEnabled</code>.
</pre>
</blockquote>

<blockquote class="lang-specific swift objective_c">
<p>v1.4.0<span>2019-01-16</span></p>
<pre>
Built with Swift 4.2.1 (Xcode 10.1).
New:
* Replace internal use of MPMoviePlayerController (deprecated) with AVPlayerViewController. Implementation changes slightly: 
  * FKPlayerDelegate is now set to FKPlayer and no more passed through FKPlayer.play(_:at:).  
  * Show or hide native playback controls using FKPlayer.showPlaybackControls().
  * While playing, control programmatically the playback with FKPlayer.pause(), FKPlayer.resume() or FKPlayer.seek(to:).
  * Get the current playback position with FKPlayer.currentTime.
  * ScalingMode becomes FKPlayer.VideoGravity.
</pre>
</blockquote>

<blockquote class="lang-specific swift objective_c">
<p>v1.3.3<span>2018-11-29</span></p>
<pre>
Build with Swift 4.2 (Xcode 10).
New:
* AppStore distribution bug fix.
* Framework includes bitcode.
</pre>
</blockquote>

<blockquote class="lang-specific swift objective_c">
<p>v1.3.1<span>2018-11-20</span></p>
<pre>
Build with Swift 4.2 (Xcode 10).
New:
* Add FKStreamerDelegate.streamer(_:didBecomeLive:) that notifies as soon as the stream is LIVE on Firekast Servers, meaning the stream is broadcast and VOD is getting recorded.
</pre>
</blockquote>

<blockquote class="lang-specific swift objective_c">
<p>v1.3.0<span>2018-10-11</span></p>
<pre>
Build with Swift 4.2 (Xcode 10).
New:
* Support Swift 4.2
* FKPlayer supports controlStyle and scaleMode options
</pre>
</blockquote>

<blockquote class="lang-specific swift objective_c">
<p>v1.2.2<span>2018-09-27</span></p>
<pre>
Build with Swift 4.1.2 (Xcode 9.4.1).
New:
* Call capture() on camera to get a snapshot of the camera preview
</pre>
</blockquote>

<blockquote class="lang-specific swift objective_c">
<p>v1.2.1<span>2018-09-20</span></p>
<pre>
Build with Swift 4.1.2 (Xcode 9.4.1).
Fixes:
* Optimizes streaming for portrait or orientation 
</pre>
</blockquote>

<blockquote class="lang-specific swift objective_c">
<p>v1.2.0<span>2018-09-20</span></p>
<pre>
Build with Swift 4.1.2 (Xcode 9.4.1).
What's new:
* Objective-C retro-compatible
* FKError replaced by NSError for Objective-C retro-compatibility
* NSError extension method: fk() to convert NSError into FKError 
</pre>
</blockquote>

<blockquote class="lang-specific swift">
<p>v1.1.1<span>2018-04-20</span></p>
<pre>
Built with Swift 4.1 (Xcode 9.3).
What's new:
* Minor fixes
</pre>
</blockquote>

<blockquote class="lang-specific swift">
<p>v1.1.0<span>2018-01-08</span></p>
<pre>
Built with Swift 4.0.3 (Xcode 9.2).
What's new:
* 100% documented.
* Refactoring, Streamer and Player, functions and parameters should be more straight forward.
* Live stream on **Facebook** and/or **Youtube** and Firekast simultaneous. See LiveStreamingPlatform.
* Use **camera features** by enabling torch, microphone, choosing your device's camera. See Camera.
</pre>
</blockquote>

<blockquote class="lang-specific swift">
<p>v1.0.0<span>2017-05-24</span></p>
<pre>
Built with Swift 3.1
First release of FirekastStreamer and FirekastPlayer to stream and play video with its streamId.
</pre>
</blockquote>