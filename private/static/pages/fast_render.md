---
collection: pages
author: Dominik Guzei
title: Using Electrostatic and FastRender
published_at: 2014-03-03 18:56:00
---

To make Electrostatic really nice, just throw in FastRender and you will
have near static website speed rendering :-)

Of course your generated content is still fetched from the database, but
FastRender sends it with the initial request so the user doesnt have to
wait until the websocket connection is established and the data is sent
pack to the client. It is there immediately.