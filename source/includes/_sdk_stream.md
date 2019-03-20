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

```swift
let metadata = ["title":"Awesome title", "description": "An awesome video with awesome people."]
guard FKStream.isMetadataValid(metadata) else { return }
stream.updateMetadata(with: metadata) { (error) in
  //...
}
```

```java
Map<String, String> metadata = new HashMap<>();
metadata.put("title", "Awesome title");
metadata.put("description", "An awesome video with awesome people.");
if (FKStream.isMetadataValid(metadata)) {
    mStream.updateMetadata(metadata, new AppStreamCallback());
}
```

```shell
# The metadata string must be a valid json string.
curl -X PUT \
    https://api.firekast.io/v2/streams/%STREAM-ID% \
    -H 'Authorization: SDK %YOUR-APP-PRIVATE-KEY%' \
    -d 'metadata={"field":"value","field2":"value2","field3":"value3"}'
```

`metadata` is a useful stream's property, which you can use to store structured information, by providing a map of key / pair string values.

It can be updated as soon as the stream is created and can be retrieved by fetching the stream.

<aside class="notice">Note that, metadata lenght must be <= 512. Please <a href="https://firekast.zendesk.com/hc/en-gb/requests/new">contact us</a> if you need more.</aside>

## Query

<blockquote class="lang-specific swift java shell"><p>Fetch your app's streams, starting with the most recent.</p></blockquote>

```shell
# with states: all, live, timeout, waiting, vod, processing 
curl https://api.firekast.io/v2/apps/myapp/streams \
    -H 'Authorization: SDK %YOUR-APP-PRIVATE-KEY%' \
    -F state=all \
    -F pageNumber=1 \
    -F pageSize=20
```

```swift
FKStream.findAll() { (numOfPages: Int, pageNumber: Int, pageSize: Int, count: Int, streams, error) in
  //...
}
```

```java
FKStream.findAll(0, 100, null, new AppFindAllCallback());
```

<blockquote class="lang-specific swift java"><p>Add a where clause to filter by state.</p></blockquote>

```swift
FKStream.findAll(where: .vod) { (numOfPages: Int, pageNumber: Int, pageSize: Int, count: Int, streams, error) in
  //...
}
```

```java
FKStream.findAll(0, 100, FKStream.State.VOD, new AppFindAllCallback());
```

We provide an easy way to fetch your app's streams.

However, we recommend that you manage the streamIDs in your own backend.

## Force Close

```swift
stream.forceClose { (error) in
  //...
}
```

```java
mStream.forceClose(new AppStreamCallback());
```

Call this function when your user has created a stream but abandoned the idea of going live. That way, the stream moves from state `waiting` to `timeout` instantaneously and your plan's **simultaneous streamer** counter decreases by 1.

<aside class="warning">Calling this function <b>does not</b> call <a href=stop-and-stop-streaming>stopStreaming</a>.</aside>

<aside class="warning">Calling this function <b>while streaming</b> (<code>live</code>) causes <b>data loss</b>! Indeed the streamer continues streaming but server resources has been released and is no more receiving frames and audio.</aside>

