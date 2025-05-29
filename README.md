## Key Functionalities

### Relay Control System

- 20 dynamically generated toggle switches  
- Real-time state logging with timestamps  
- Light intensity adjustment (0–100%)  
- Visual feedback through switch positioning  

### Media Management

#### Playback Controls

- Play/Pause functionality  
- Next/Previous track navigation  
- Stop with reset  

#### Volume Control

- Linear 0–100% adjustment  

#### File Handling

- MP3 validation on upload  
- Dynamic playlist management  
- Instant addition to selector dropdown  

### Logging System

- Automatic timestamp generation  
- Color-coded messages  
- Auto-scroll to latest entry  
- Persistent event history during session  

---

## Design Specifications

### Visual Design

**Color Palette:**

- **Primary:** `#ff5900` (orange accents)  
- **Background:** `#000000` (black)  
- **Secondary:** `#212121` (dark gray)  
- **Controls:** `#383838` (medium gray)  

**Typography:** `'FX LED'` monospace font throughout  

**UI Principles:**

- Consistent spacing and padding  
- Clear visual hierarchy  
- Responsive element positioning  
- Hover/active state feedback  

### Interaction Design

- **Switches:** Smooth sliding animation  
- **Buttons:** Color transition on hover/click  
- **Sliders:** Real-time value adjustment  
- **Upload:** Hidden file input triggered by button  

---

## Technical Implementation Notes

### Frontend Logic

- Dynamic element generation via JavaScript  
- Audio handling through hidden HTML5 player  
- Object URL storage for uploaded files  
- Playlist management with circular navigation  

### Backend Features

- Jinja template rendering  
- Static asset serving  
- Debug mode configuration  

---

## Potential Improvements

- **Hardware Integration:** Connect relay controls to GPIO pins  
- **Persistent Storage:** Save uploaded files between sessions  
- **Mobile Optimization:** Responsive design for smaller screens  
- **User Authentication:** Secure access control  
- **Additional Media Support:** WAV, OGG format compatibility  
- **Playlist Saving:** Persistent playlist storage  
- **Real-time Monitoring:** Hardware status updates  

---

### Future Development Priorities

```mermaid
pie
    title Development Focus Areas
    "Hardware Integration" : 35
    "Mobile Optimization" : 25
    "Security Features" : 20
    "Media Expansion" : 15
    "UI Enhancements" : 5
