# Firekast Basics

Before we start, let's introduce some Firekast basics concepts. You may already be familiar with since we designed our service with well known SaaS platforms in mind.

*Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less. -- Marie Curie*

## Apps

<blockquote class="lang-specific shell"><p>Fetching your streams, starting with the most recent.</p></blockquote>

```shell
# with states: all, live, timeout, waiting, vod, processing 
curl https://api.firekast.io/v2/apps/myapp/streams \
    -H 'Authorization: SDK %YOUR-APP-PRIVATE-KEY%' \
    -F state=all \
    -F pageNumber=1 \
    -F pageSize=20
```

On your [dashboard](https://dashboard.firekast.io), you can create as many applications as you like. 

A Firekast application has:

* a name.
* a plan, free or paying, see [pricing](https://firekast.io/pricing).
* a unique (and renewalable) set of private and public [keys](#api-keys).
* list associated videos regardless of their status (live, VOD...).

Each of these information are editable later.

An application can be deleted if you decide so.

<aside class="warning">
Deleting an application <strong>deletes</strong> all its videos. This cannot be undone.
</aside>

<aside class="success">
For a given end application we recommand you create 2 Firekast applications: one for your <strong>development</strong>, the other to go for <strong>production</strong>.
</aside>


## API Keys

API keys allow to initialize SDKs so they can request our REST API. Firekast provides a set of two (renewable) API keys : one that **must** remain private and one that aims to be public. 

### Private key

Use this key to initialize our SDKs and make authorized HTTPS requests.

<aside class="warning">The private key <strong>must</strong> remain confidential. It allows, among other things, to create and delete videos. <strong>Do not use this key in a web browser</strong>.</aside>

### Public key

Use this key to initialize the web player.


### SDK v1.4.x and before

<aside class="notice">
Until the release of our SDK v1.5 updates, the SDKs would use a combination of <strong>clientKey</strong> and <strong>applicationId</strong>. These are being <strong>deprecated</strong> in favor of private and public key scopes.<br/>
</aside>

Please refer to our [sample app repository](#sample-apps) history for sample code using `clientKey` and `applicationId`.

We recommend that you upgrade regularly to the [latest SDK version](#release-notes), as we keep adding new features based on your feedback.

## Simultaneous streamers

As soon as a streamer creates a live stream, it starts counting in your app's simultaneous streamer count until the live session is done. Both `waiting` and `live` [stream states](#state) are counted when it comes to your app's subscription plan.
 
Live streams come with a [timeout](#timeout), and should be [stopped](#stop-streaming) when you are done using them.

## Active Users

In the **current month**, each **new device** (mobile or web) that reaches our server is counted as a new Active User.


## Free trial terms

We recommand to upgrade your app to a paid plan before going to production.

Check out our [pricing plans](https://firekast.io/pricing).

Free trial comes with the following limitations:

* Up to 5 [simultaneous streamers](#simultaneous-streamers).
* Up to 100 [monthly active users](#active-users).

<aside class="warning">
If you reach the <strong>free plan</strong> limits, <a href="#create-streams">creating</a> a stream, or <a href="#play-and-stop">watching</a> a stream will temporarily result in a 402 error.
</aside>