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