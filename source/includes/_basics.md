# Firekast Basics

Before we start, let's introduce some Firekast basics concepts. You may already be familiar with since we designed our service with well known SaaS platforms in mind.

*Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less. -- Marie Curie*

## API key

The API key allows you to make a restricted set of calls through our REST API. 
The API only allows calls to get streams for playback, typically for use with our JS Player.

<aside>
With custom authorizations, our APIs can be used on your backend to list your streams and manage your applications.
<a href="https://firekast.zendesk.com/hc/en-gb/requests/new">contact us</a> to discuss your needs.
</aside>

<aside>
The API key is not intended to be used with the Android or iOS SDKs, for these you should use the [clientKey](#clientkey) as detailed below.
</aside>

## clientKey

This is your private account key. It is created once you create an account on Firekast dashboard. This key is needed for mobile SDK initialization.

It is available in Firekast dashboard and looks like `c8178e40-0ccf-35e7-a17c-5b26c0cf5f87`.

<aside class="warning">
Keep your client key it private, do NOT share it!
</aside>

## Application

On your dashboard, you can create as many applications as you like. An application is identified with its unique **applicationId** and gathers all the streams you have made using this id.

To create an application, you must specify a *name* (usually your company name or app name), and specify a *plan* (free or paying, see [pricing](https://firekast.zendesk.com/hc/en-gb/requests/new)). Each of these information can be edited later.

An application can be deleted if you decide so.

<aside class="warning">
If an application is deleted, all the videos it contains will be deleted as well.
</aside>

## applicationId

The id that uniquely identifies an application.

It is available in the Firekast dashboard and looks like `e8078520-0ccf-35e7-8493-034e3c17d8c0`.

## streamId

The id that uniquely identifies a stream in your application. See [stream.id](#id).

It is available in the Firekast dashboard, within your application and looks like `d17j39tg4noar25g3`.



## Active Users

In the <strong>current month</strong>, every <strong>new device</strong> (mobile or web) that reaches our server is counted as a new Active User for the month.

<aside class="warning"><a href="https://firekast.io/pricing">Plans</a> are based on both active users and simultaneous live streams. Be warned that streams creation will be rejected as soon as the limit is reached.<br/>We highly recommand to move on a paid plan as soon as you go on production.</aside>
