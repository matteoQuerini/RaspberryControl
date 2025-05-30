# Technical Report: Raspberry Control Panel for Escape Rooms

## Introduction

The **Raspberry Control Panel** is an advanced web interface designed to manage automation systems in complex environments like escape rooms. This platform centralizes control of physical devices (lights, relays) and digital media (audio files), providing an intuitive, responsive, and adaptable control panel for multisensory scenarios. The goal is to give operators a unified tool to orchestrate immersive experiences by combining hardware automation and media playback.

## System Architecture

The project uses a three-layer tech stack:

- **Backend**: Flask framework (Python) for HTTP routing and request handling.
- **Frontend**:
  - HTML5 for interface structure.
  - CSS3 with responsive layouts (Flexbox/Grid) and dark theme with orange accents for optimal readability in low-light environments.
  - Dynamic JavaScript for interactive logic.
- **Hardware Integration**: Designed to interface with Raspberry Pi via GPIO, though control logic is browser-simulable.

## Core Functionality

### 1. Advanced Light Control

- **Individual Switches**:  
  20 dynamically generated relays, each featuring:
  - ON/OFF toggle switch (visual feedback: red/off → green/on)
  - Slider for fine-grained brightness adjustment (0–100%)

- **Room Assignment**:  
  Dropdown menus to assign relays to specific rooms (e.g., "Room1", "Room3"), enabling logical grouping of physical devices.

### 2. Integrated Media System

- **File Upload**:  
  Support for multiple MP3 uploads (with format validation). Tracks are stored as blob URLs in the browser.

- **Dynamic Playlist**:
  - Track selection via dropdown menu
  - Basic controls: Play, Stop, Next, Previous
  - Circular playlist navigation (pressing "Next" after the last track restarts from the beginning)

- **Volume Management**:  
  Dedicated slider for real-time volume adjustment (0–100%)

### 3. Log Console

- **Action Tracking**:  
  All user interactions are timestamped and logged:
  - Relay activation/deactivation
  - Brightness adjustments
  - Room assignments
  - Media operations (playback, uploads, volume changes)

- **Functional Design**:  
  Scrollable text area with monospace font, optimized for continuous monitoring.

## Interface Design

The UI is organized into three key sections:

- **Relay Control (Left 45%)**:
  - Responsive grid (CSS Grid) of cards containing switches, sliders, and dropdowns
  - Scrollable display (hidden scrollbar for aesthetics)

- **Media Control (Right 40%)**:
  - Oversized audio control buttons for touch-friendly use
  - Volume slider positioned in the header
  - Custom-styled upload section

- **Log Console (Bottom 25%)**:
  - Strategic placement for immediate visibility during operations

### Aesthetic Choices

- "FX LED" font for industrial control-panel aesthetics
- Dark theme (`#212121`) with orange accents (`#FF5900`) to reduce eye strain in dark environments
- Hover/active effects on interactive elements for tactile feedback

## Key Technologies

- **Dynamic DOM Manipulation (JavaScript)**:  
  Relay generation via template literals. Delegated event handling for efficiency.

- **Native Audio Handling**:  
  HTML5 `<audio>` element with programmatic controls (`play()`, `pause()`)

- **Secure Uploads**:  
  JavaScript File API for validation and blob URL conversion (no server upload)

- **Adaptive Layout**:  
  CSS media queries for screens ≥1200px and mobile devices

## Escape Room Use Cases

- **Environmental Control**:  
  Turn lights on/off in specific rooms, adjust ambiance (e.g., 10% brightness for mystery effects)

- **Immersive Audio**:  
  Contextual sound playback (e.g., thunder, creaking doors) synchronized with actions

- **Real-Time Debugging**:  
  Log console helps diagnose issues mid-session (e.g., "Relay12 activated at 21:30 in Crypt")

## Limitations & Future Development

- **Persistence**:  
  Room assignments and relay states aren’t saved on refresh.  
  _Solution_: Integrate `localStorage` or backend database.

- **Security**:  
  No authentication.  
  _Priority_: Add login for multi-operator environments.

- **Hardware Extensions**:  
  Actual GPIO/Raspberry Pi integration via REST APIs or WebSockets.

- **Additional Features**:
  - Programmable timers for lights/audio
  - Audio track seek bar
  - Preset light effects (fade, strobe)

## Conclusions

The Raspberry Control Panel provides a comprehensive solution for creative home automation, particularly in escape rooms where coordination and atmosphere are critical. It combines granular hardware control, media management, and operational monitoring in a single intuitive interface. The modular structure and well-organized code facilitate extensions, making it a robust foundation for experiential IoT projects. Its functional aesthetics and user feedback focus demonstrate human-centered design tailored to operators’ real-world needs.
