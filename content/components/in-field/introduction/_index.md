---
title: "In-field Introduction"
layout: "single"
description: "The in-field, high-contrast library is specific to applications used outdoors."
components: true
layout: single
component: Introduction
weight: 1
url: "/components/in-field"
tags: [in-field, hide-styles, hide-usage, hide-accessibility, OEM]
private: true
hidden: true
sitemap_exclude: true
---

<style>
header .nav-item {
  display: none !important;
}
article .nav-tabs {
  display: none !important;
  opacity: 0;
}
</style>

{{< img src="/img/in-field/intro.png" width="1087" height="385" class="bg-light" lazyload="auto" >}}

## Overview

The in-field, high-contrast library is specific to applications used outdoors on handheld devices where the environmental conditions cannot be controlled. These applications are built to meet the users’ special needs, such as challenging outdoor lighting, moving or vibrating devices, and/or impeding protective clothing.

**In-Cab**
This is a library of Modus components, building blocks, specifications, and principles to maintain a consistent experience when operating heavy machinery or vehicles in the field. In-cab is a more specialized subcategory of in-field patterns. It is primarily targeted towards large, easy-to-use, easy-to-identify, high-contrast components.

These components are designed specifically for use on displays within a machine or a vehicle, mounted in a cab, vibrating and often at arm's-length. Because operation of the machine is the user’s primary focus, the in-cab displays are used in the periphery of vision and need to have larger elements and rely heavily on iconography rather than text.

**Modus In-field UI Kits**
Kits are available in Figma. This brand base must maintain optimal usability, while also allowing flexibility to support Trimble and other OEM brand variations.

![intro OEM branding](/img/in-field/intro-oem-branding.png)

## Supporting Brand Variations

- The Modus In-field Design System will serve as the base for any products delivered to our parent organizations as well as branded variants for different OEMs.

###### Supporting our Customers

- The brand base aims to best support each user group with easy-to-use User Interfaces (UI) and clear patterns of use, as well as targeted tone of voice and language that communicates best to the end user.

- Trimble and OEM Brand Variations, or Themes, are applied on top of the user-centric brand base. This may include variations to color, iconography, imagery and models, splash screens, and logos, for example.

![intro OEM branding 1](/img/in-field/intro-oem-branding-1.png)

**What can be brand-specific**

The following UI elements are designed and componentized to flexibly support brand themes:

- App Button, icon, and name;
- Splash screen;
- Log In screen;
- Dashboard;
- Tiles - colors, images, and text labels are brandable;
- Start button - color is brandable;
- Global Brand bar (Activity bar at top of screen) - Brand name, Brand logo, and color only;
- OpenGL Machine models can be branded;
- Dialog images can be branded as well, to match the OpenGL machine model.

![intro OEM branding 2](/img/in-field/intro-oem-branding-2.png)

**What cannot be brand-specific**

- The following UI elements are consistent across all brands (with minor exceptions for one high value OEM).
- Font is not brandable apart form one high value OEM we support an alternate font for: Use Roboto.
- Core iconography (log in icon, overflow menu icon, attachment icons such as buckets and blades, status iconography (success, warning, error), icons for menus, etc.
- Notification and Messaging
- Lightbars
- Autos Indicators
- Background screen colors (i.e, the gray background is uniform for all brands, except one high value OEM).

{{< whats-changed-table >}}

| Date       | Version | Notes                | Contributors |
| ---------- | ------- | -------------------- | ------------ |
| 06/01/2022 | 1.0.1   | Updated full layout. | M. Johns     |

{{</ whats-changed-table >}}
