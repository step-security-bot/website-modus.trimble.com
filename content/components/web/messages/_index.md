---
title: "Messages"
layout: "single"
description: "Messages provide the user with contextual static information. They have a lower priority than an alert."
components: true
componentsWeb: true
images:
  - "/img/components/headers/messages.png"
bootstrapURL: "/components/messages/"
reactBootstrapURL: "/components/messages/"
webComponentsURL: "https://modus-web-components.trimble.com/?path=/story/components-message--default"
aliases:
  - "/components/messages/"
---

## Overview

Messages display low priority content directly on the page and are not dismissable. They should be used within other elements to convey helpful information in an unobtrusive way.

<div class="d-flex flex-column">
  <div class="message message-primary">
    <i class="modus-icons notranslate">info</i>This is a primary message
  </div>
  <div class="message message-secondary">
    <i class="modus-icons notranslate">help</i>This is a secondary message
  </div>
</div>

## Usage

**Use when**

- Providing the user with helpful, contextual information about a possible action or a set of data.

**Don't use when**

- Alerting the user of a high priority error. Instead, use an [Alert](/components/web/alerts/).
- Alerting the user of an out-of-context event. Instead, use a [Toast](/components/web/toasts/).

## Specifications

<div class="guide-example-block my-3">
  <div class="guide-sample">
    <div class="message message-primary m-0">
      <i class="modus-icons notranslate">info</i> This is a primary message.
    </div>
  </div>
</div>

- Fills the width of its container.
- Should have an accompanying icon to the left of the message text. When the text spans multiple lines, the icon should remain aligned to the top.

### Behaviors

- Messages should remain static on the page. They should not be dismissible.

### Editorial

- Messages should be brief, full sentences, with proper punctuation.
- They should provide the user with helpful, contextual information about a possible action or a set of data.

### Accessibility

- Make sure the message is read by screen readers.
- Do not use the `role="alert"` attribute.
