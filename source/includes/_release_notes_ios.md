<blockquote class="lang-specific swift">
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

<blockquote class="lang-specific swift">
<p>v1.3.3<span>2018-11-29</span></p>
<pre>
Build with Swift 4.2 (Xcode 10).
New:
* AppStore distribution bug fix.
* Framework includes bitcode.
</pre>
</blockquote>

<blockquote class="lang-specific swift">
<p>v1.3.1<span>2018-11-20</span></p>
<pre>
Build with Swift 4.2 (Xcode 10).
New:
* Add FKStreamerDelegate.streamer(_:didBecomeLive:) that notifies as soon as the stream is LIVE on Firekast Servers, meaning the stream is broadcast and VOD is getting recorded.
</pre>
</blockquote>

<blockquote class="lang-specific swift">
<p>v1.3.0<span>2018-10-11</span></p>
<pre>
Build with Swift 4.2 (Xcode 10).
New:
* Support Swift 4.2
* FKPlayer supports controlStyle and scaleMode options
</pre>
</blockquote>

<blockquote class="lang-specific swift">
<p>v1.2.2<span>2018-09-27</span></p>
<pre>
Build with Swift 4.1.2 (Xcode 9.4.1).
New:
* Call capture() on camera to get a snapshot of the camera preview
</pre>
</blockquote>

<blockquote class="lang-specific swift">
<p>v1.2.1<span>2018-09-20</span></p>
<pre>
Build with Swift 4.1.2 (Xcode 9.4.1).
Fixes:
* Optimizes streaming for portrait or orientation 
</pre>
</blockquote>

<blockquote class="lang-specific swift">
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