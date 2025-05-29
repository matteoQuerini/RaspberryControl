# Raspberry Pi Control Panel Web Application Documentation

## Project Overview

This project implements a web-based control panel for Raspberry Pi using Flask. The interface allows users to:

- Control up to 20 relays via toggle switches  
- Adjust lighting intensity with a slider  
- Play audio files with media controls  
- Upload and manage MP3 files  
- View system logs in a console interface

---

## System Architecture

### Backend (Flask/Python)

- **Framework:** Flask web application  
- **Endpoint:** Single route at root URL (`/`) that renders the HTML template  
- **Debug Mode:** Enabled for development purposes  
- **Static Files:** Serves CSS and JavaScript from `/static` directory

### Frontend (HTML/CSS/JavaScript)

- **HTML Structure:** Semantic layout with three main sections: Relay Control, Log Console, Media Control  
- **CSS Styling:** Custom dark theme with orange accents  
- **JavaScript:** Dynamic element creation and event handling

---

## Key Components

### 1. Relay Control Panel

- **Position:** Left side of interface (35% width)  
- **Components:**  
  - 20 dynamically generated toggle switches arranged in a grid  
  - Light intensity slider (0–10 range)  
- **Visual Design:**  
  - Custom-styled toggle switches with orange active state  
  - Dark background with orange section header  
  - Responsive grid layout

### 2. Log Console

- **Position:** Bottom section (80% width)  
- **Functionality:**  
  - Displays timestamped system events  
  - Auto-scrolls to latest entries  
- **Design:**  
  - Black background, white monospace text  
  - Scrollable area with custom scrollbar  
  - Orange section header

### 3. Media Control Panel

- **Position:** Right side of interface (40% width)  
- **Components:**  
  - Volume control slider (0–10 range)  
  - Song selection dropdown  
  - Media control buttons: Play, Stop, Next, Previous  
  - File upload for MP3s  
- **Features:**  
  - MP3 upload with validation  
  - Playlist management  
  - Track navigation  
- **Design:**  
  - Music buttons with hover/active states  
  - Orange upload button  
  - Dark theme with orange accents

---

## User Interactions

### Relay Control

- Toggling a switch logs:
  - Relay identifier  
  - New state (ON/OFF)  
  - Timestamp

### Media Playback

- **Controls:**  
  - `Play`: Starts audio  
  - `Stop`: Stops and resets  
  - `Next/Previous`: Navigate playlist  
  - `Volume`: Adjusts 0–100%
- **File Management:**  
  - Upload button triggers file selection  
  - Validates MP3 files  
  - Updates song selector dropdown

### Light Control

- Slider adjusts lighting (0–100%)  
- Changes logged with timestamps

---

## Design System

- **Color Scheme:**  
  - Primary: `#ff5900` (orange)  
  - Background: `#000000` (black)  
  - Secondary: `#212121` (dark gray)  
  - Controls: `#383838` (medium gray)  

- **Typography:**  
  - `'FX LED'` monospace font

- **Layout Principles:**  
  - Fixed positioning for control sections  
  - Responsive relay grid  
  - Consistent padding/spacing

- **Visual Feedback:**  
  - Hover effects  
  - Active button states  
  - Live log updates

---

## Technical Implementation Notes

### Frontend Logic

- **Dynamic Element Creation:**  
  - 20 relay switches via JS loop  
  - Media buttons from command array  

- **Audio Handling:**  
  - Hidden `<audio>` element  
  - Playlist management with index  

- **File Management:**  
  - Stored via `URL.createObjectURL()`  
  - Validates `.mp3`, `.wav`, `.ogg` extensions

### Backend Features

- Template rendering with Flask  
- Static file serving  
- Debug mode enabled

---

## Potential Improvements

- Backend integration for actual relay control  
- Persistent file storage  
- User authentication  
- Mobile responsiveness  
- Real-time hardware status  
- More media formats  
- Save/load playlists
