# SDK - Stream

A stream describes one video content. A stream is unique and is **associated to an [application](#apps)**.

## id

<blockquote class="lang-specific shell"><p>Fetch a stream from our API using its ID:</p></blockquote>

```shell
curl https://api.firekast.io/v2/streams/%YOUR-STREAM-ID% -H 'Authorization: SDK %YOUR-APP-PRIVATE-KEY%'
```

<blockquote class="lang-specific shell"><p>Delete a stream:</p></blockquote>
```shell
# This operation is not recoverable.
curl -X DELETE \
    https://api.firekast.io/v2/streams/%YOUR-STREAM-ID% \
    -H 'Authorization: SDK %YOUR-APP-PRIVATE-KEY%' 
```

The unique identifier for a stream, assigned once at the stream creation time (`createStream`).
It is available though mobile SDKs, visible in the dashboard, and looks like `d17j39tg4noar25g3`.

## state

During its life time, a stream goes though predefined states:

* `waiting`: the stream has been created and is waiting to receive frames and audio from the [streamer](#sdk-streamer).
* `live`: the stream is [live](#go-live) and available for [playback](#sdk-player) immediately.
* `vod`: the stream is available for [playback](#sdk-player) immediately.
* `timeout`: the stream stopped and has not received any data.
* `processing`: this state is used by our VOD upload API - If you want to use this API, please [contact us](https://firekast.zendesk.com/hc/en-gb/requests/new).

The typical live stream lifecycle is `waiting` → `live` → `vod`.

If a stream has been `waiting` but never received video data from the streamer, it transitions to `timeout`.

If a stream is `live` and stops receiving video data, it transitions to `vod`.

## timeout

```swift
let timeout: Date = stream.ingestTimeout // available only when stream's state is .waiting.
```

```java
Date timeout = stream.getIngestTimeout() // available only when stream's state is WAITING.
```

The stream timeout deadline (`ingestTimeout`) is a date available while a stream state is `waiting`. After that date, if a streamer hasn't started streaming, the stream's state transitions to `timeout`. It can no longer serve a live broadcast, and doesn't yield any content for playback.

If your application no longer uses a stream, you should [stop it](#stop-streaming) explicitely to ensure it frees ressources allocated and immediately stops counting against your [simultanous streamers](#simultaneous-streamers) quota.


## metadata

<blockquote class="lang-specific shell"><p>Update stream's metadata:</p></blockquote>

```shell
# The metadata string must be a valid json string.
curl -X PUT \
    https://api.firekast.io/v2/streams/%STREAM-ID% \
    -H 'Authorization: SDK %YOUR-APP-PRIVATE-KEY%' \
    -d 'metadata={"field":"value","field2":"value2","field3":"value3"}'
```

`metadata` is a usefull stream property, which you can use to store structured information, by providing a map of key / pair string values. When later fetching this stream, it will yield the given metadata.

You can edit stream metadata as soon as the stream has been created.

