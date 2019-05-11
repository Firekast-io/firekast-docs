<blockquote class="lang-specific java">
<p>v1.7.1<span>2019-05-11</span></p>
<pre>
* Streamer internal optimizations.
</pre>
</blockquote>

<blockquote class="lang-specific java">
<p>v1.7.0<span>2019-04-24</span></p>
<pre>
* Player can be muted.
* By default, player starts to play immediately, otherwise call <code>play(FKStream stream, long atTimeInMillis, boolean playImmediately)</code> to override this behavior.
* Add <code>FKPlayer</code> reference in <code>FKPlayer.Callback</code>'s methods.
</pre>
</blockquote>

<blockquote class="lang-specific java">
<p>v1.6.0<span>2019-03-20</span></p>
<pre>
* Min SDK version is now 19 (was 16).
* Security: new API auth keys available in your app settings. Use <code>privateKey</code> to initialize the SDK instead of deprecated <code>clientKey</code> and <code>applicationID</code>. This key must remain confidential.
* Errors: readibility has been improved to help support.
* Restream: we decided to let you choose the platform to which you want to live stream. You are no longer dependent on our implementation, provide us with the RTMP link and that's it. So <code>FKOutput</code> has been abandonned.
* Test Bandwidth: start streaming on <code>FKStream.bandwidthTest</code> stream and observe <code>FKStreamer.StreamingCallback.onStreamHealthDidUpdate(...)</code>.
* <code>FKStreamer</code>:
  * <code>requestStream</code> becomes <code>createStream</code>.
  * <code>RequestStreamCallback</code> becomes <code>CreateStreamCallback</code>.
  * <code>onStreamingUpdateAvailable</code> becomes <code>onStreamHealthDidUpdate</code> indicating when camera is freezing on screen because of data congestion and providing a rate for 0 to 1 that indicates how the stream is performing. <strong>We consider that 70% is the minimum rate for a healthy live stream.</strong>
  * <code>setQuality(FKQuality target)</code> allows to change the quality for the next created streams.
* <code>FKStream</code>: 
  * Query for your app's streams using <code>findAll(...)</code>.
  * <code>forceClose()</code> allows to force close a stream in case your User created a stream and you know for sure that User will finally not go live.

Bug fix:
* <code>isStreaming()</code> is now <i>false</i> in <code>onStreamDidStop</code>.
* <code>getCameraAsync()</code> indeed was not returning the camera in very rare corner case.
* <code>switchCamera()</code> is now synchoneous so your app can update its UI right after the call.
* Camera flash availability and turn on/off was not reliable.
</pre>
</blockquote>

<blockquote class="lang-specific java">
<p>v1.5.0<span>2019-01-28</span></p>
<pre>
* Abality to disable video capture while streaming with <code>setVideoCaptureEnabled</code>.
* Renaming <code>setMicrophoneEnabled</code> into <code>setAudioCaptureEnabled</code>.
* Fix <code>FKPlayer.Callback#onPlayerWillPlay(FKStream, FKError)</code> that used to be called with error <code>null</code> when reaching the end of a live stream.
</pre>
</blockquote>

<blockquote class="lang-specific java">
<p>v1.4.0<span>2019-01-16</span></p>
<pre>
* FKPlayer refactoring. What's changed:
   * Use play(FKStream stream, long at) to start playing the given stream at a specific time.
   * While playing, use pause() and resume().
   * Call getCurrentPosition() to get the current playback position in time.
   * Call getState() to retrieve the current player state and setCallback(FKPlayer.Callback callback) to track events.
   * Call setPlaybackConstrolsMargins and setPlaybackControlsBackground to customize the playback controls UI.
   * Finally, call release() when the player is no longer required.
</pre>
</blockquote>

<blockquote class="lang-specific java">
<p>v1.2.5<span>2019-01-03</span></p>
<pre>
* Returns the player's playback position, in milliseconds.
* Bug fixes
</pre>
</blockquote>

<blockquote class="lang-specific java">
<p>v1.2.4<span>2018-11-30</span></p>
<pre>
* Add FKPlayerView.Callback#onPlayerStateChanged(boolean playWhenReady, int playbackState) callback to notify of player's state changes.
</pre>
</blockquote>

<blockquote class="lang-specific java">
<p>v1.2.3<span>2018-11-20</span></p>
<pre>
* Add FKStreamer.StreamingCallback#onStreamDidBecomeLive(@NonNull FKStream stream) callback to notify as soon as flagged LIVE on Firekast Servers, meaning the stream is actually live.
</pre>
</blockquote>

<blockquote class="lang-specific java">
<p>v1.2.2<span>2018-11-09</span></p>
<pre>
* Add support for emulators (Android Virtual Devices) 🎉. Apps embedding the SDK can run on AVD but note that streaming is only possible for AVD with API 23 and above.
</pre>
</blockquote>

<blockquote class="lang-specific java">
<p>v1.2.1<span>2018-09-27</span></p>
<pre>
* ExoPlayer`'s PlayerView accessor available in FKPlayerView`
</pre>
</blockquote>

<blockquote class="lang-specific java">
<p>v1.2.0<span>2018-09-17</span></p>
<pre>
* Specify ExoPlayer dependency is not required anymore in dependencies
</pre>
</blockquote>

<blockquote class="lang-specific java">
<p>v1.1.2<span>2018-06-21</span></p>
<pre>
* HTTP request bug fix.
</pre>
</blockquote>

<blockquote class="lang-specific java">
<p>v1.1.1<span>2018-05-11</span></p>
<pre>
What's new:
* Fix aspect ratio issue.
* Fix camera position issue in FKCameraFragment.Builder.
* Retrieve FKStreamer in FKCamera ready callback. 
</pre>
</blockquote>

<blockquote class="lang-specific java">
<p>v1.1.0<span>2018-03-29</span></p>
<pre>
What's new:
* 100% documented.
* Refactoring, FKStreamer and FKPlayerView, functions and parameters should be more straight forward.
* Introducing FKStream object with its stream id, state and more. 
* Live stream on **Facebook** and/or **Youtube** and Firekast simultaneous. See FKOutput.
* Use **camera features** by enabling torch, microphone, choosing your device's camera. See FKCamera.
</pre>
</blockquote>

<blockquote class="lang-specific java">
<p>v1.0.0<span>2017-05-25</span></p>
<pre>
First release.
</pre>
</blockquote>