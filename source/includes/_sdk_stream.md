# SDK - Stream

<blockquote class="lang-specific">
 <p>Our APIs can be used on your backend to list your streams and manage your applications.</p>
 <p><a href="https://firekast.zendesk.com/hc/en-gb/requests/new" target="blank">Contact us to discuss your needs.</a></p>
</blockquote>

A stream describes one video content. A stream is unique and is associated to an application.

## id

This is the unique String identifier of the object, assigned once at the stream creation time (`createStream`).

See also [streamId](#stream-id).

## state

During its life time, a stream goes though different states:

* waiting: the stream has been created and is waiting to receive frames and audio from `FKStreamer`.
* timeout: the stream has been waiting for too long and has been destroyed.
* live: the stream is live.
* processing: transitioning from live to vod state.
* vod: the stream is available for replay.

Stream's lifecycle can be either:

* Expected behavior: `waiting` → `live` → `processing` → `vod`
* In case no frame and audio received until ingest timeout: `waiting` → `timeout`.

## timeout

```swift
let timeout: Date = stream.ingestTimeout // available only when stream's state is .waiting.
```

```java
Date timeout = stream.getIngestTimeout() // available only when stream's state is WAITING.
```

When a stream is created we provision accordingly resources on our servers while waiting for frames and audio. As we cannot block resources forever, we introduced a timeout date (`ingestTimeout`) after which we free server resources for the given stream. Usually a stream waits for frames and audio for about 10 minutes. 

After that date, the stream's state becomes `timeout` and is no more able to receive data.

Timeout date is available only when stream's state is `waiting`.