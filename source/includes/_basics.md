# Firekast Basics

Before we start, let's introduce some Firekast basics concepts. You may already be familiar with since we designed our service with well known SaaS platforms in mind.

*Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less. -- Marie Curie*

## Apps

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

Use this key to initialize the mobile SDK and make HTTPS requests.

### Public key

Use this key to initialize the JavaScript Player.

<aside class="warning">
The private key <strong>must</strong> remain confidential. It allows, among other things, to create and delete videos. Do not use the private key in your public website when using Firekast WebPlayerJS as source code is visible to anyone.
</aside>

<aside class="notice">
Note that <strong>clientKey</strong> and <strong>applicationId</strong> are now <strong>deprecated</strong>.<br/>
To improve security we rethink how SDKs get initialized and introduced private and public keys.<br/>
Prefer to update mobile SDKs and use private keys instead of using clientKey and applicationId.
</aside>

## Stream ID

The unique identifier for a stream, see [stream.id](#id).

It is available though our SDKs, visible in the dashboard, and looks like `d17j39tg4noar25g3`.

## Active Users

In the <strong>current month</strong>, every <strong>new device</strong> (mobile or web) that reaches our server is counted as a new Active User for the month.

<aside class="warning"><a href="https://firekast.io/pricing">Plans</a> are based on both active users and simultaneous live streams. Be warned that streams creation will be rejected as soon as the limit is reached.<br/>We highly recommand to move on a paid plan as soon as you go on production.</aside>
