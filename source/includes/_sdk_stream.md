# SDK | Stream

<blockquote class="lang-specific">
 <p>Our APIs can be used on your backend to list your streams and manage your applications.</p>
 <p><a href="https://firekast.zendesk.com/hc/en-gb/requests/new" target="blank">Contact us to discuss your needs.</a></p>
</blockquote>

A stream describes one video content. A stream is unique and is associated to an application.

## id

This is the unique id of the object, see [streamId](#streamId). It is assigned when the [Stream object is created](#request-for-a-stream).

## state

During its life time, a stream goes though different states:

* waiting: the stream has been created and is waiting for a video to be streamed
* timeout: the stream has been waiting for too long and has been destroyed
* live
* processing: transitioning from live to vod
* vod

Stream's lifecycle can be either:

* waiting -> live -> processing -> vod
* waiting -> timeout