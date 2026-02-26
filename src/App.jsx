
import React, { useState, useEffect } from 'react';
// These imports would typically be from an icon library like React Icons
// For this exercise, we'll represent them as simple text or SVGs directly
const IconArrowUp = () => <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-8 8h6v8h4v-8h6z"/></svg>;
const IconArrowDown = () => <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 20l8-8h-6V4h-4v8H4z"/></svg>;
const IconCheckCircle = () => <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>;
const IconClock = () => <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.01 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11V7h1.5v3.25L16.25 14l-.75.75L12.5 11.5V7z"/></svg>;
const IconHourglass = () => <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M6 2v6h.01L6 8.01 10 12l-4 4-.01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-4 .01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-9l-4-4V4h8v3.5l-4 4z"/></svg>;
const IconXCircle = () => <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>;
const IconAlertCircle = () => <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>;
const IconInfo = () => <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>;
const IconSearch = () => <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>;
const IconHome = () => <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>;
const IconPlus = () => <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>;
const IconEdit = () => <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>;
const IconDownload = () => <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>;
const IconFilter = () => <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>;
const IconGrid = () => <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>;

/*
  Functional Specification: Component Library (Embedded)
  ---
  This section describes common UI components used throughout the application,
  adhering to the Elite Aesthetics and Light-Theme First principles.

  1. Card:
     - Elevated with subtle shadow (--shadow-card) and large border-radius (--radius-xl).
     - Glassmorphism effect (white translucency, blur) applied where appropriate (e.g., detail views, popups).
     - Clickable, triggering navigation to detail, edit, or workflow view.
     - Contains status indicators using deterministic colors (pastel background, vibrant border).

  2. Button:
     - Primary: Blue background (--color-primary-500), white text.
     - Secondary: White background, charcoal text, light border (--color-slate-300).
     - Text: No background/border, blue text.
     - Hover/active states with subtle shadow/color change.

  3. Status Badge:
     - `status-badge` class with specific background and border colors for each status.
     - Defined for Approved (Green), In Progress (Blue), Pending (Orange), Rejected (Red), Exception (Purple).

  4. Input Field:
     - Clean, light background, charcoal text.
     - Rounded corners (--radius-md).
     - Focus state with primary brand color border and subtle shadow.
     - Includes support for validation feedback (red text below field).

  5. Chart Container:
     - Dedicated container for graphs, styled as a card with white background and shadow.

  6. KPI Tile:
     - Special card for key performance indicators, displaying value, label, and trend indicator (up/down arrow with color).

  7. Milestone Tracker:
     - Visual horizontal progress bar for workflow stages.
     - Each step represented by a dot (completed, current, pending states).
     - Uses icons for status within dots.

  8. News/Audit Feed Item:
     - Card-like entry for audit logs, showing user, action, timestamp, and relevant details.
     - Role-based visibility applied at data fetching/rendering level.

  9. Global Search (Floating):
     - Activated from header, overlays content.
     - Smart suggestions displayed dynamically below search input.
     - Search results displayed in a scrollable list.

  10. Filter Panel (Web: Side, Mobile: Bottom-sheet - conceptually handled):
      - For web, a fixed-width side panel.
      - Contains filter groups (checkboxes, radio buttons, range sliders - conceptually).
      - Supports saved filters.

  11. Empty State:
      - Illustrated message for empty data grids/sections with a clear call-to-action button.

  12. Breadcrumbs:
      - Clear navigation path at the top of detail screens.

  13. Icons:
      - Simple SVG icons for clarity and visual cues.
*/

/*
  Functional Specification: Color Palette (Embedded)
  ---
  Defined in App.css using CSS variables for easy management and theme consistency.

  - **Primary UI:**
    - `--color-white`: #FFFFFF (Pure white for backgrounds, cards)
    - `--color-slate-100`: #F8FAF9 (Soft main background)
    - `--color-slate-200`: #EEF2F6 (Secondary background, e.g., hover states, audit feed)
    - `--color-slate-300`: #E2E8F0 (Borders, separators)
    - `--color-charcoal-900`: #0F172A (High-contrast text)
    - `--color-charcoal-700`: #334155 (Secondary text)
    - `--color-charcoal-500`: #64748B (Tertiary text, icons, placeholders)
    - `--color-primary-500`: #1D4ED8 (Brand blue for primary actions, links)
    - `--color-primary-100`: #DBEAFE (Tint of brand blue for subtle accents, focus states)

  - **Status Colors (Pastel Background + Vibrant Border/Text for Light Mode readability):**
    - **Approved (Green):** `--color-status-approved-bg: #D1FAE5`, `--color-status-approved-border: #10B981`
    - **In Progress (Blue):** `--color-status-in-progress-bg: #DBEAFE`, `--color-status-in-progress-border: #3B82F6`
    - **Pending (Orange):** `--color-status-pending-bg: #FFEDD5`, `--color-status-pending-border: #F59E0B`
    - **Rejected (Red):** `--color-status-rejected-bg: #FEE2E2`, `--color-status-rejected-border: #EF4444`
    - **Exception (Purple):** `--color-status-exception-bg: #F3E8FF`, `--color-status-exception-border: #A855F7`

  - **Aesthetics:**
    - `--color-glass-white`: rgba(255, 255, 255, 0.85) (White translucency for glassmorphism)
*/

/*
  Functional Specification: Sample Data (Embedded)
  ---
  Simulated data for demonstration purposes.
*/
const sampleRequests = [
  { id: 'SR-001', title: 'HVAC Unit Maintenance', status: 'Approved', priority: 'High', dueDate: '2023-11-20', assignee: 'John Doe', asset: 'HVAC-01', createdBy: 'Alice Smith', createdAt: '2023-11-10T10:00:00Z', description: 'Routine maintenance for 3rd floor HVAC unit.', files: [], workflowStage: 'Approved' },
  { id: 'SR-002', title: 'Leaky Faucet in Restroom', status: 'In Progress', priority: 'Urgent', dueDate: '2023-11-15', assignee: 'Jane Miller', asset: 'PLUMB-03', createdBy: 'Bob Johnson', createdAt: '2023-11-12T14:30:00Z', description: 'Faucet in men\'s restroom on 1st floor is leaking constantly.', files: [], workflowStage: 'Assigned' },
  { id: 'SR-003', title: 'Lighting Fixture Repair', status: 'Pending', priority: 'Medium', dueDate: '2023-11-25', assignee: 'N/A', asset: 'ELEC-05', createdBy: 'Charlie Brown', createdAt: '2023-11-13T09:15:00Z', description: 'Flickering light in conference room B.', files: [], workflowStage: 'Submitted' },
  { id: 'SR-004', title: 'Broken Chair in Lobby', status: 'Rejected', priority: 'Low', dueDate: '2023-11-30', assignee: 'N/A', asset: 'FURN-02', createdBy: 'Diana Prince', createdAt: '2023-11-09T11:00:00Z', description: 'One of the chairs in the main lobby is broken and unsafe.', files: [], workflowStage: 'Rejected' },
  { id: 'SR-005', title: 'Emergency Generator Check', status: 'Exception', priority: 'Critical', dueDate: '2023-11-14', assignee: 'David Lee', asset: 'GEN-01', createdBy: 'Eve Adams', createdAt: '2023-11-11T08:00:00Z', description: 'Weekly check for emergency generator failed self-test.', files: [], workflowStage: 'Investigation' },
];

const sampleWorkOrders = [
  { id: 'WO-101', title: 'Replace HVAC Filter', status: 'In Progress', priority: 'High', dueDate: '2023-11-20', technician: 'John Doe', associatedRequest: 'SR-001', createdAt: '2023-11-10T11:00:00Z', description: 'Replace air filter for HVAC-01 unit, perform system check.', workflowStage: 'Assigned' },
  { id: 'WO-102', title: 'Fix Faucet Leak', status: 'Pending', priority: 'Urgent', dueDate: '2023-11-15', technician: 'N/A', associatedRequest: 'SR-002', createdAt: '2023-11-12T15:00:00Z', description: 'Identify source of leak and repair faucet in 1st floor men\'s restroom.', workflowStage: 'Approved' },
  { id: 'WO-103', title: 'Repair Conference Room Lights', status: 'Approved', priority: 'Medium', dueDate: '2023-11-25', technician: 'Sarah Connor', associatedRequest: 'SR-003', createdAt: '2023-11-13T10:00:00Z', description: 'Investigate flickering light issue in conference room B. Replace ballast if needed.', workflowStage: 'Approved' },
];

const sampleAssets = [
  { id: 'HVAC-01', name: 'Main HVAC Unit', type: 'HVAC', location: 'Rooftop', status: 'Operational', lastMaintenance: '2023-10-15', nextMaintenance: '2023-12-15', usage: 85, health: 'Good' },
  { id: 'PLUMB-03', name: 'Restroom Faucet (1st Floor)', type: 'Plumbing', location: '1F Men\'s Restroom', status: 'Malfunctioning', lastMaintenance: '2023-08-01', nextMaintenance: '2024-02-01', usage: 90, health: 'Fair' },
  { id: 'ELEC-05', name: 'Conference Room B Lighting', type: 'Electrical', location: 'Conference Room B', status: 'Operational with Issues', lastMaintenance: '2023-09-01', nextMaintenance: '2024-03-01', usage: 70, health: 'Poor' },
];

const sampleAuditLogs = [
  { id: 'A001', timestamp: '2023-11-14T10:30:00Z', user: 'Admin User', action: 'Approved Request SR-001', recordType: 'Request', recordId: 'SR-001', details: 'Request SR-001 approved by Admin User.' },
  { id: 'A002', timestamp: '2023-11-14T10:25:00Z', user: 'John Doe', action: 'Updated Work Order WO-101', recordType: 'Work Order', recordId: 'WO-101', details: 'Status changed from "Pending" to "In Progress".' },
  { id: 'A003', timestamp: '2023-11-14T09:00:00Z', user: 'Alice Smith', action: 'Created Request SR-001', recordType: 'Request', recordId: 'SR-001', details: 'New service request for HVAC Unit Maintenance.' },
  { id: 'A004', timestamp: '2023-11-13T15:00:00Z', user: 'System', action: 'SLA Breach Warning', recordType: 'Work Order', recordId: 'WO-102', details: 'Work Order WO-102 is approaching SLA breach for "Assignment" stage.' },
];

/*
  Functional Specification: Workflow Diagrams (Embedded)
  ---
  Describes the workflow stages for a typical Service Request.

  Service Request Workflow:
  1.  **Submitted:** Employee creates a new request.
  2.  **Pending Approval:** Request awaits review by a Facility Manager.
  3.  **Approved:** Request is approved.
  4.  **Assigned:** Technician is assigned to the request, and a Work Order might be created.
  5.  **In Progress:** Technician is actively working on the request/work order.
  6.  **Completed:** Technician completes the work.
  7.  **Closed:** Facility Manager reviews and closes the request.
  8.  **Rejected:** Request is rejected by a Facility Manager (can happen at 'Pending Approval' stage).
  9.  **Investigation/Exception:** For complex issues or if an SLA is breached, requiring special attention.

  - **Role-based approvals:** Facility Manager approves 'Pending Approval' -> 'Approved'.
  - **Milestone tracking:** Visualized by `MilestoneTracker` component.
  - **SLA tracking per workflow stage:** Each stage has an associated SLA (e.g., 'Assigned within 24h of Approval').
  - **SLA breach indication:** Highlighted visually on records (e.g., red border, specific icon).
*/
const workflowStages = [
  { id: 'Submitted', name: 'Submitted', icon: IconInfo, order: 1 },
  { id: 'Pending Approval', name: 'Pending Approval', icon: IconHourglass, order: 2 },
  { id: 'Approved', name: 'Approved', icon: IconCheckCircle, order: 3 },
  { id: 'Assigned', name: 'Assigned', icon: IconClock, order: 4 },
  { id: 'In Progress', name: 'In Progress', icon: IconClock, order: 5 },
  { id: 'Completed', name: 'Completed', icon: IconCheckCircle, order: 6 },
  { id: 'Closed', name: 'Closed', icon: IconCheckCircle, order: 7 },
  { id: 'Rejected', name: 'Rejected', icon: IconXCircle, order: 98, isTerminal: true },
  { id: 'Investigation', name: 'Investigation', icon: IconAlertCircle, order: 99 },
];

/*
  Functional Specification: RBAC (Role-Based Access Control) Logic (Embedded)
  ---
  Defines permissions for different user roles.
  - `ROLES` object maps roles to capabilities.
  - `can(action, resource)` function checks if the current user role has permission.
  - UI elements (buttons, fields, entire sections) dynamically rendered based on these permissions.
*/
const ROLES = {
  EMPLOYEE: {
    can: {
      'view:dashboard': true,
      'create:request': true,
      'view:my_requests': true,
      'view:request_detail': true,
      'edit:my_request': (request) => request.status === 'Submitted' || request.status === 'Pending', // Field-level/Record-level security example
      'upload:file_request': true,
      'view:audit_logs': false,
    }
  },
  TECHNICIAN: {
    can: {
      'view:dashboard': true,
      'view:assigned_work_orders': true,
      'view:work_order_detail': true,
      'edit:work_order': true,
      'update_status:work_order': true,
      'view:request_detail': true,
      'view:asset_detail': true,
      'upload:file_work_order': true,
      'view:audit_logs': true, // View logs for assigned records
    }
  },
  ADMIN: { // Facility Manager
    can: {
      'view:dashboard': true,
      'view:all_requests': true,
      'view:all_work_orders': true,
      'view:all_assets': true,
      'create:request': true,
      'edit:request': true,
      'approve:request': true,
      'reject:request': true,
      'create:work_order': true,
      'edit:work_order': true,
      'assign:work_order': true,
      'manage:assets': true,
      'view:request_detail': true,
      'view:work_order_detail': true,
      'view:asset_detail': true,
      'export:data': true,
      'manage:users': true,
      'view:audit_logs': true, // All audit logs
      'export:audit_logs': true,
      'configure:system_settings': true,
    }
  }
};

const canUser = (role, action, resource = null) => {
  if (!ROLES[role]) return false;
  const permission = ROLES[role].can[action];
  if (typeof permission === 'function') {
    return permission(resource);
  }
  return permission || false;
};

/*
  Functional Specification: Navigation Structure & User Flow (Embedded)
  ---
  Describes the primary screens and how users move between them.

  **Navigation Structure:**
  - **Dashboard:**
    - Entry point for all personas.
    - Displays aggregated KPIs, charts, and lists of relevant items (My Requests, Assigned Work Orders, All Assets).
    - Navigable via `handleCardClick` to Detail Views.
  - **Request Detail Screen:**
    - Full-screen view for a specific Service Request.
    - Accessible by clicking a `RequestCard` from the Dashboard or search results.
    - Includes: Header (title, status, quick actions), Breadcrumbs, Record Summary (key details, Milestone Tracker, Related Records), News/Audit Feed.
  - **Work Order Detail Screen:**
    - Similar to Request Detail, but for Work Orders.
    - Accessible by clicking a `WorkOrderCard`.
  - **Asset Detail Screen:**
    - Similar to Request Detail, but for Assets.
    - Accessible by clicking an `AssetCard`.
  - **Create/Edit Forms:**
    - Accessed via "Create New" buttons on Dashboard or "Edit" actions on Detail Screens.
    - Full-screen, modal-like experience.
  - **Global Search:**
    - Always accessible from the header.
    - Floating overlay for smart suggestions and quick navigation.

  **User Flows (Examples):**

  1.  **Employee - Create Service Request:**
      - Dashboard -> Click "Create Request" button -> `FormScreen` (Request) -> Fill details, attach files, submit -> Redirect to `RequestDetailScreen` for the new request.
  2.  **Technician - Manage Assigned Work Order:**
      - Dashboard -> Click on an "In Progress" `WorkOrderCard` -> `WorkOrderDetailScreen` -> View details, update status, add comments/files, complete work -> Update status via quick action or form.
  3.  **Facility Manager - Approve a Request:**
      - Dashboard -> View "Pending" `RequestCard`s -> Click on a `RequestCard` -> `RequestDetailScreen` -> Review request, check audit log -> Click "Approve" button -> Status updates, milestone tracker advances.
  4.  **Admin - Monitor Asset Performance:**
      - Dashboard -> View `AssetCard`s or relevant KPI charts -> Click on `AssetCard` -> `AssetDetailScreen` -> View asset details, maintenance history, related work orders.
  5.  **Global Search Usage:**
      - Any screen -> Click search icon in header -> `GlobalSearch` overlay appears -> Type query (e.g., "HVAC") -> Smart suggestions appear -> Click on a suggestion/result (e.g., "HVAC-01") -> Navigate to `AssetDetailScreen` for HVAC-01.
*/

// --- Helper Components & Functions (within App.jsx scope) ---

const getStatusClass = (status) => {
  switch (status?.toLowerCase()) {
    case 'approved': return 'approved';
    case 'in progress': return 'in-progress';
    case 'pending': return 'pending';
    case 'rejected': return 'rejected';
    case 'exception': return 'exception';
    case 'malfunctioning': return 'exception';
    case 'operational with issues': return 'pending';
    case 'submitted': return 'pending';
    case 'assigned': return 'in-progress';
    case 'completed': return 'approved';
    case 'closed': return 'approved';
    case 'investigation': return 'exception';
    default: return 'default';
  }
};

const Breadcrumbs = ({ path, onNavigate }) => (
  <nav className="breadcrumbs" aria-label="breadcrumb">
    <span className="breadcrumb-item" onClick={() => onNavigate({ screen: 'DASHBOARD' })}>
      <IconHome style={{ width: '1em', height: '1em', marginRight: 'var(--spacing-xxs)' }} /> Dashboard
    </span>
    {path.map((item, index) => (
      <React.Fragment key={index}>
        <span className="breadcrumb-separator">/</span>
        <span
          className={`breadcrumb-item ${index === path.length - 1 ? 'active' : ''}`}
          onClick={() => item.onClick && onNavigate(item.target)}
        >
          {item.label}
        </span>
      </React.Fragment>
    ))}
  </nav>
);

const StatusBadge = ({ status }) => (
  <span className={`status-badge ${getStatusClass(status)}`}>{status}</span>
);

const Card = ({ children, onClick, className = '' }) => (
  <div
    className={`card-item bg-white rounded-xl shadow-card p-lg cursor-pointer glass-effect ${className}`}
    onClick={onClick}
    style={{ transition: 'all 0.2s ease-in-out' }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
    onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
  >
    {children}
  </div>
);

const Button = ({ children, onClick, variant = 'primary', className = '' }) => (
  <button className={`btn btn-${variant} ${className}`} onClick={onClick}>
    {children}
  </button>
);

const KPI = ({ label, value, trend, trendValue, unit = '' }) => (
  <div className="kpi-tile glass-effect">
    <div className="kpi-label">{label}</div>
    <div className="kpi-value">{value}{unit}</div>
    {trend && (
      <div className={`kpi-trend ${trend === 'up' ? 'up' : 'down'}`}>
        {trend === 'up' ? <IconArrowUp className="kpi-trend-icon" /> : <IconArrowDown className="kpi-trend-icon" />}
        {trendValue}% {trend === 'up' ? 'Increase' : 'Decrease'}
      </div>
    )}
  </div>
);

const ChartPlaceholder = ({ title, type }) => (
  <div className="chart-container glass-effect">
    <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: 'var(--font-size-xl)' }}>{title} ({type})</h3>
    <div style={{ height: '200px', backgroundColor: 'var(--color-slate-200)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-charcoal-500)' }}>
      {/* Real-time chart data with subtle pulse animation */}
      <span className="pulse-animation">Live Chart Data Here</span>
    </div>
    {/* Export functionality */}
    <div style={{ textAlign: 'right', marginTop: 'var(--spacing-md)' }}>
      <Button variant="text" onClick={() => console.log(`Export ${title} to PDF`)}>Export PDF</Button>
      <Button variant="text" onClick={() => console.log(`Export ${title} to Excel`)}>Export Excel</Button>
    </div>
  </div>
);

const MilestoneTracker = ({ currentStageId, allStages }) => {
  const sortedStages = [...allStages].sort((a, b) => a.order - b.order).filter(s => !s.isTerminal);
  const currentStageIndex = sortedStages.findIndex(s => s.id === currentStageId);
  const progressWidth = currentStageIndex >= 0 ? ((currentStageIndex + 1) / sortedStages.length) * 100 : 0;

  return (
    <div className="milestone-tracker">
      <div className="milestone-tracker-line">
        <div className="milestone-tracker-progress" style={{ width: `${progressWidth}%` }}></div>
      </div>
      {sortedStages.map((stage, index) => {
        const isCompleted = index < currentStageIndex;
        const isCurrent = index === currentStageIndex;
        let dotClass = 'pending';
        let DotIcon = stage.icon;

        if (isCompleted) {
          dotClass = 'completed';
          DotIcon = IconCheckCircle; // Always show check for completed
        } else if (isCurrent) {
          dotClass = 'current';
        }

        return (
          <div key={stage.id} className="milestone-step">
            <div className={`milestone-dot ${dotClass}`}>
              <DotIcon style={{ width: '1em', height: '1em' }} />
            </div>
            <span className="milestone-label">{stage.name}</span>
          </div>
        );
      })}
    </div>
  );
};

const NewsAuditFeed = ({ logs, currentUserRole }) => {
  /*
    Functional Specification: Role-based visibility for logs
    - Admin sees all logs.
    - Technician sees logs related to their assigned records.
    - Employee sees logs related to their created requests.
    - Immutable audit trail is ensured by backend design (not changeable in UI).
  */
  const filteredLogs = logs.filter(log => {
    if (canUser(currentUserRole, 'view:audit_logs', {})) { // Assuming general view permission
      if (currentUserRole === 'ADMIN') return true;
      // More granular filtering for Technician/Employee based on log.recordId and user-specific data
      // For demo, we'll simplify:
      return true; // Simplified for demo, in real app, 'recordId' would be checked against user's records.
    }
    return false;
  });

  return (
    <div className="bg-white rounded-xl shadow-md p-lg glass-effect">
      <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: 'var(--font-size-xl)' }}>Recent Activities & Audit Feed</h3>
      {filteredLogs.length > 0 ? (
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {filteredLogs.map(log => (
            <div key={log.id} className="audit-feed-item">
              <div className="audit-feed-icon">
                <IconInfo style={{ width: '1em', height: '1em' }} />
              </div>
              <div className="audit-feed-content">
                <div className="text-sm">
                  <span className="audit-feed-user">{log.user}</span>{' '}
                  <span className="audit-feed-action">{log.action}</span>
                  {log.recordId && <span className="text-charcoal-700"> ({log.recordType}: {log.recordId})</span>}
                </div>
                <div className="audit-feed-timestamp">{new Date(log.timestamp).toLocaleString()}</div>
                <p className="text-sm text-charcoal-500" style={{ marginTop: 'var(--spacing-xxs)' }}>{log.details}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-charcoal-500 text-sm">No recent activities or audit logs.</div>
      )}
      {canUser(currentUserRole, 'export:audit_logs') && (
        <div style={{ textAlign: 'right', marginTop: 'var(--spacing-md)' }}>
          <Button variant="text" onClick={() => console.log('Export Audit Logs')}>Export Logs</Button>
        </div>
      )}
    </div>
  );
};

const RequestCard = ({ request, onClick, currentUserRole }) => {
  const canEdit = canUser(currentUserRole, 'edit:my_request', request);
  const canApprove = canUser(currentUserRole, 'approve:request', request);

  const handleEditClick = (e) => {
    e.stopPropagation(); // Prevent card click from firing
    onClick('EDIT_REQUEST', { id: request.id });
  };

  const handleApproveClick = (e) => {
    e.stopPropagation();
    console.log('Approve request:', request.id);
    // In a real app, this would trigger an API call and state update
  };

  return (
    <Card onClick={() => onClick('REQUEST_DETAIL', { id: request.id })} className="relative">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-sm)' }}>
        <h4 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)' }}>{request.title}</h4>
        <StatusBadge status={request.status} />
      </div>
      <p className="text-sm text-charcoal-700">ID: <span className="font-semibold text-charcoal-900">{request.id}</span></p>
      <p className="text-sm text-charcoal-700">Priority: <span className="font-semibold text-charcoal-900">{request.priority}</span></p>
      <p className="text-sm text-charcoal-700">Due Date: <span className="font-semibold text-charcoal-900">{request.dueDate}</span></p>
      <p className="text-sm text-charcoal-700">Assignee: <span className="font-semibold text-charcoal-900">{request.assignee}</span></p>

      {/* Quick Actions (Hover Actions for Web) */}
      <div className="card-quick-actions flex gap-sm">
        {canEdit && (
          <Button variant="text" onClick={handleEditClick}><IconEdit /></Button>
        )}
        {canApprove && request.status === 'Pending' && (
          <Button variant="primary" onClick={handleApproveClick} style={{ padding: 'var(--spacing-xxs) var(--spacing-sm)' }}>Approve</Button>
        )}
      </div>
    </Card>
  );
};

const WorkOrderCard = ({ workOrder, onClick, currentUserRole }) => {
  const canEdit = canUser(currentUserRole, 'edit:work_order', workOrder);
  const canUpdateStatus = canUser(currentUserRole, 'update_status:work_order', workOrder);

  const handleEditClick = (e) => {
    e.stopPropagation();
    onClick('EDIT_WORK_ORDER', { id: workOrder.id });
  };

  const handleUpdateStatusClick = (e) => {
    e.stopPropagation();
    console.log('Update status for work order:', workOrder.id);
  };

  const slaBreach = workOrder.id === 'WO-102' && workOrder.status === 'Pending'; // Example SLA breach
  return (
    <Card onClick={() => onClick('WORK_ORDER_DETAIL', { id: workOrder.id })} className="relative" style={slaBreach ? { border: '2px solid var(--color-status-rejected-border)' } : {}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-sm)' }}>
        <h4 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)' }}>{workOrder.title}</h4>
        <StatusBadge status={workOrder.status} />
      </div>
      <p className="text-sm text-charcoal-700">ID: <span className="font-semibold text-charcoal-900">{workOrder.id}</span></p>
      <p className="text-sm text-charcoal-700">Technician: <span className="font-semibold text-charcoal-900">{workOrder.technician}</span></p>
      <p className="text-sm text-charcoal-700">Due Date: <span className="font-semibold text-charcoal-900">{workOrder.dueDate}</span></p>
      <p className="text-sm text-charcoal-700">Related Request: <span className="font-semibold text-charcoal-900">{workOrder.associatedRequest}</span></p>

      {slaBreach && (
        <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-status-rejected-border)', fontSize: 'var(--font-size-sm)', marginTop: 'var(--spacing-sm)' }}>
          <IconAlertCircle style={{ marginRight: 'var(--spacing-xxs)' }} /> SLA Breach Imminent!
        </div>
      )}

      {/* Quick Actions */}
      <div className="card-quick-actions flex gap-sm">
        {canEdit && (
          <Button variant="text" onClick={handleEditClick}><IconEdit /></Button>
        )}
        {canUpdateStatus && (
          <Button variant="primary" onClick={handleUpdateStatusClick} style={{ padding: 'var(--spacing-xxs) var(--spacing-sm)' }}>Update Status</Button>
        )}
      </div>
    </Card>
  );
};

const AssetCard = ({ asset, onClick, currentUserRole }) => {
  const canEdit = canUser(currentUserRole, 'manage:assets', asset); // Example check

  const handleEditClick = (e) => {
    e.stopPropagation();
    onClick('EDIT_ASSET', { id: asset.id });
  };

  return (
    <Card onClick={() => onClick('ASSET_DETAIL', { id: asset.id })} className="relative">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-sm)' }}>
        <h4 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-bold)' }}>{asset.name}</h4>
        <StatusBadge status={asset.status} />
      </div>
      <p className="text-sm text-charcoal-700">ID: <span className="font-semibold text-charcoal-900">{asset.id}</span></p>
      <p className="text-sm text-charcoal-700">Type: <span className="font-semibold text-charcoal-900">{asset.type}</span></p>
      <p className="text-sm text-charcoal-700">Location: <span className="font-semibold text-charcoal-900">{asset.location}</span></p>
      <p className="text-sm text-charcoal-700">Health: <span className="font-semibold text-charcoal-900">{asset.health}</span></p>

      {/* Quick Actions */}
      <div className="card-quick-actions flex gap-sm">
        {canEdit && (
          <Button variant="text" onClick={handleEditClick}><IconEdit /></Button>
        )}
      </div>
    </Card>
  );
};

const GlobalSearchOverlay = ({ onClose, onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // Smart suggestions logic
  useEffect(() => {
    if (searchTerm.length > 1) {
      const allSearchableItems = [
        ...sampleRequests.map(r => ({ ...r, type: 'request', label: `${r.id}: ${r.title}` })),
        ...sampleWorkOrders.map(wo => ({ ...wo, type: 'work_order', label: `${wo.id}: ${wo.title}` })),
        ...sampleAssets.map(a => ({ ...a, type: 'asset', label: `${a.id}: ${a.name}` })),
      ];
      const newSuggestions = allSearchableItems
        .filter(item => item.label.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, 5); // Limit suggestions
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    const allResults = [
      ...sampleRequests.filter(r => JSON.stringify(r).toLowerCase().includes(searchTerm.toLowerCase())).map(r => ({ ...r, type: 'request' })),
      ...sampleWorkOrders.filter(wo => JSON.stringify(wo).toLowerCase().includes(searchTerm.toLowerCase())).map(wo => ({ ...wo, type: 'work_order' })),
      ...sampleAssets.filter(a => JSON.stringify(a).toLowerCase().includes(searchTerm.toLowerCase())).map(a => ({ ...a, type: 'asset' })),
    ];
    setSearchResults(allResults);
  };

  const handleResultClick = (item) => {
    if (item.type === 'request') onNavigate({ screen: 'REQUEST_DETAIL', params: { id: item.id } });
    if (item.type === 'work_order') onNavigate({ screen: 'WORK_ORDER_DETAIL', params: { id: item.id } });
    if (item.type === 'asset') onNavigate({ screen: 'ASSET_DETAIL', params: { id: item.id } });
    onClose();
  };

  return (
    <div className="floating-search-overlay">
      <div className="floating-search-content glass-effect">
        <form onSubmit={handleSearch} className="floating-search-input-wrapper">
          <input
            type="text"
            className="global-search-input"
            placeholder="Search all records, assets, or tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          <button type="button" onClick={onClose} className="floating-search-close-btn">×</button>
        </form>

        {searchTerm.length > 0 && suggestions.length > 0 && (
          <div className="floating-search-results">
            <h5 className="text-sm font-semibold text-charcoal-700" style={{ marginBottom: 'var(--spacing-xs)' }}>Suggestions</h5>
            {suggestions.map((item) => (
              <div key={`${item.type}-${item.id}`} className="floating-search-result-item" onClick={() => handleResultClick(item)}>
                <span className="floating-search-result-icon">
                  {item.type === 'request' ? <IconInfo /> : item.type === 'work_order' ? <IconClock /> : <IconGrid />}
                </span>
                <span className="floating-search-suggestion">{item.label}</span>
              </div>
            ))}
          </div>
        )}

        {searchTerm.length > 0 && searchResults.length > 0 && (
          <div className="floating-search-results">
            <h5 className="text-sm font-semibold text-charcoal-700" style={{ marginBottom: 'var(--spacing-xs)' }}>Search Results</h5>
            {searchResults.map((item) => (
              <div key={`${item.type}-${item.id}`} className="floating-search-result-item" onClick={() => handleResultClick(item)}>
                <span className="floating-search-result-icon">
                  {item.type === 'request' ? <IconInfo /> : item.type === 'work_order' ? <IconClock /> : <IconGrid />}
                </span>
                <span className="floating-search-suggestion">[{item.type.toUpperCase()}] {item.label || item.title || item.name}</span>
              </div>
            ))}
          </div>
        )}

        {searchTerm.length > 0 && suggestions.length === 0 && searchResults.length === 0 && (
          <div className="text-charcoal-500 text-center" style={{ padding: 'var(--spacing-lg)' }}>No results found for "{searchTerm}".</div>
        )}
      </div>
    </div>
  );
};

const DashboardScreen = ({ onNavigate, currentUserRole }) => {
  const [showFilters, setShowFilters] = useState(false);
  const requests = canUser(currentUserRole, 'view:all_requests') ? sampleRequests : sampleRequests.filter(r => r.createdBy === 'Alice Smith'); // Simplified RBAC

  const handleToggleFilters = () => setShowFilters(prev => !prev);

  /*
    Functional Specification: Dashboard-level filters & Saved filters
    - `showFilters` state controls visibility of the filter panel.
    - Saved filters functionality would involve a backend API to store user preferences.
    - Filters UI: Side panel for web (implemented here conceptually).
  */

  return (
    <div className="app-content">
      <div className="main-content-area flex-col gap-xl">
        <h1 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--spacing-lg)' }}>Welcome, {currentUserRole} Dashboard</h1>

        {/* KPIs Section */}
        <section>
          <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-lg)' }}>Key Performance Indicators</h2>
          <div className="flex gap-lg" style={{ flexWrap: 'wrap' }}>
            <KPI label="Total Requests" value="125" trend="up" trendValue="5" />
            <KPI label="Open Work Orders" value="42" trend="down" trendValue="2" />
            <KPI label="Critical Assets" value="7" trend="up" trendValue="1" />
            <KPI label="Avg. Resolution Time" value="2.1" unit="days" trend="down" trendValue="10" />
          </div>
        </section>

        {/* Charts Section */}
        <section>
          <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-lg)' }}>Analytics & Trends</h2>
          <div className="flex gap-lg" style={{ flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 450px' }}><ChartPlaceholder title="Requests by Status" type="Donut" /></div>
            <div style={{ flex: '1 1 450px' }}><ChartPlaceholder title="Work Orders by Technician" type="Bar" /></div>
            <div style={{ flex: '1 1 450px' }}><ChartPlaceholder title="Asset Health Trends" type="Line" /></div>
            <div style={{ flex: '1 1 450px' }}><ChartPlaceholder title="SLA Compliance Rate" type="Gauge" /></div>
          </div>
        </section>

        {/* Recent Activities Section */}
        {canUser(currentUserRole, 'view:audit_logs') && (
          <section>
            <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-lg)' }}>Recent Activities</h2>
            <NewsAuditFeed logs={sampleAuditLogs} currentUserRole={currentUserRole} />
          </section>
        )}


        {/* Requests Section */}
        {canUser(currentUserRole, 'view:all_requests') || canUser(currentUserRole, 'view:my_requests') ? (
          <section>
            <div className="grid-header">
              <h2 style={{ fontSize: 'var(--font-size-2xl)' }}>Service Requests</h2>
              <div className="grid-controls">
                <Button onClick={handleToggleFilters} variant="secondary">
                  <IconFilter style={{ marginRight: 'var(--spacing-xs)' }} /> Filters
                </Button>
                {canUser(currentUserRole, 'create:request') && (
                  <Button onClick={() => onNavigate({ screen: 'CREATE_REQUEST' })}>
                    <IconPlus style={{ marginRight: 'var(--spacing-xs)' }} /> New Request
                  </Button>
                )}
                {canUser(currentUserRole, 'export:data') && (
                   <Button variant="secondary">
                    <IconDownload style={{ marginRight: 'var(--spacing-xs)' }} /> Export
                  </Button>
                )}
              </div>
            </div>
            {requests.length > 0 ? (
              <div className="flex gap-lg" style={{ flexWrap: 'wrap' }}>
                {requests.map(request => (
                  <div key={request.id} style={{ flex: '1 1 300px' }}>
                    <RequestCard request={request} onClick={(action, params) => onNavigate({ screen: action, params })} currentUserRole={currentUserRole} />
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                title="No Service Requests Yet"
                description="It looks like there are no service requests to display. Start by creating one!"
                icon={<IconInfo />}
                ctaButton={canUser(currentUserRole, 'create:request') ? <Button onClick={() => onNavigate({ screen: 'CREATE_REQUEST' })}><IconPlus /> Create New Request</Button> : null}
              />
            )}
          </section>
        ) : null}

        {/* Work Orders Section */}
        {canUser(currentUserRole, 'view:all_work_orders') || canUser(currentUserRole, 'view:assigned_work_orders') ? (
          <section>
            <div className="grid-header">
              <h2 style={{ fontSize: 'var(--font-size-2xl)' }}>Work Orders</h2>
              <div className="grid-controls">
                <Button onClick={handleToggleFilters} variant="secondary">
                  <IconFilter style={{ marginRight: 'var(--spacing-xs)' }} /> Filters
                </Button>
                {canUser(currentUserRole, 'create:work_order') && (
                  <Button onClick={() => onNavigate({ screen: 'CREATE_WORK_ORDER' })}>
                    <IconPlus style={{ marginRight: 'var(--spacing-xs)' }} /> New Work Order
                  </Button>
                )}
              </div>
            </div>
            {sampleWorkOrders.length > 0 ? (
              <div className="flex gap-lg" style={{ flexWrap: 'wrap' }}>
                {sampleWorkOrders.map(workOrder => (
                  <div key={workOrder.id} style={{ flex: '1 1 300px' }}>
                    <WorkOrderCard workOrder={workOrder} onClick={(action, params) => onNavigate({ screen: action, params })} currentUserRole={currentUserRole} />
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                title="No Work Orders Assigned"
                description="You currently have no work orders assigned. Check back later or create a new one."
                icon={<IconClock />}
                ctaButton={canUser(currentUserRole, 'create:work_order') ? <Button onClick={() => onNavigate({ screen: 'CREATE_WORK_ORDER' })}><IconPlus /> Create New Work Order</Button> : null}
              />
            )}
          </section>
        ) : null}

        {/* Assets Section */}
        {canUser(currentUserRole, 'view:all_assets') ? (
          <section>
            <div className="grid-header">
              <h2 style={{ fontSize: 'var(--font-size-2xl)' }}>Assets</h2>
              <div className="grid-controls">
                <Button onClick={handleToggleFilters} variant="secondary">
                  <IconFilter style={{ marginRight: 'var(--spacing-xs)' }} /> Filters
                </Button>
                {canUser(currentUserRole, 'manage:assets') && (
                  <Button onClick={() => onNavigate({ screen: 'CREATE_ASSET' })}>
                    <IconPlus style={{ marginRight: 'var(--spacing-xs)' }} /> New Asset
                  </Button>
                )}
              </div>
            </div>
            {sampleAssets.length > 0 ? (
              <div className="flex gap-lg" style={{ flexWrap: 'wrap' }}>
                {sampleAssets.map(asset => (
                  <div key={asset.id} style={{ flex: '1 1 300px' }}>
                    <AssetCard asset={asset} onClick={(action, params) => onNavigate({ screen: action, params })} currentUserRole={currentUserRole} />
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState
                title="No Assets Registered"
                description="The facility currently has no assets registered. Start adding assets to monitor their performance."
                icon={<IconGrid />}
                ctaButton={canUser(currentUserRole, 'manage:assets') ? <Button onClick={() => onNavigate({ screen: 'CREATE_ASSET' })}><IconPlus /> Register New Asset</Button> : null}
              />
            )}
          </section>
        ) : null}

      </div>
      {showFilters && (
        <div className="filter-panel-web glass-effect">
          <h3 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-lg)' }}>Filters</h3>
          <p className="text-sm text-charcoal-500" style={{ marginBottom: 'var(--spacing-md)' }}>Web: Side Panel | Mobile: Bottom Sheet</p>
          <div className="filter-group">
            <h4 className="filter-group-title">Status</h4>
            <div className="filter-option">
              <input type="checkbox" id="filter-approved" /><label htmlFor="filter-approved" className="filter-label">Approved</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="filter-inprogress" /><label htmlFor="filter-inprogress" className="filter-label">In Progress</label>
            </div>
            <div className="filter-option">
              <input type="checkbox" id="filter-pending" /><label htmlFor="filter-pending" className="filter-label">Pending</label>
            </div>
          </div>
          <div className="filter-group">
            <h4 className="filter-group-title">Priority</h4>
            <div className="filter-option">
              <input type="radio" name="priority" id="priority-high" /><label htmlFor="priority-high" className="filter-label">High</label>
            </div>
            <div className="filter-option">
              <input type="radio" name="priority" id="priority-medium" /><label htmlFor="priority-medium" className="filter-label">Medium</label>
            </div>
          </div>
          <div className="flex gap-md" style={{ marginTop: 'var(--spacing-lg)', borderTop: '1px solid var(--color-slate-200)', paddingTop: 'var(--spacing-md)' }}>
            <Button variant="primary" className="flex-grow">Apply Filters</Button>
            <Button variant="secondary" className="flex-grow">Reset</Button>
          </div>
          <div style={{ marginTop: 'var(--spacing-md)', borderTop: '1px solid var(--color-slate-200)', paddingTop: 'var(--spacing-md)' }}>
            <h4 className="filter-group-title">Saved Views</h4>
            <Button variant="text" style={{ width: '100%', justifyContent: 'flex-start', marginBottom: 'var(--spacing-xs)' }}>My Open Requests <IconInfo /></Button>
            <Button variant="text" style={{ width: '100%', justifyContent: 'flex-start', marginBottom: 'var(--spacing-xs)' }}>High Priority Only <IconAlertCircle /></Button>
            <Button variant="text" style={{ width: '100%', justifyContent: 'flex-start' }}>All Assets <IconGrid /></Button>
          </div>
        </div>
      )}
    </div>
  );
};

const RequestDetailScreen = ({ requestId, onNavigate, currentUserRole }) => {
  const request = sampleRequests.find(r => r.id === requestId);
  const relatedWorkOrder = sampleWorkOrders.find(wo => wo.associatedRequest === requestId);
  const relatedAsset = sampleAssets.find(a => a.id === request?.asset);
  const requestAuditLogs = sampleAuditLogs.filter(log => log.recordId === requestId);

  if (!request) {
    return (
      <div className="app-content">
        <EmptyState
          title="Request Not Found"
          description={`The service request with ID ${requestId} could not be found.`}
          icon={<IconXCircle />}
          ctaButton={<Button onClick={() => onNavigate({ screen: 'DASHBOARD' })}>Go to Dashboard</Button>}
        />
      </div>
    );
  }

  const breadcrumbsPath = [
    { label: 'Requests', target: { screen: 'DASHBOARD' }, onClick: true },
    { label: request.id, active: true },
  ];

  const canEdit = canUser(currentUserRole, 'edit:request', request) || canUser(currentUserRole, 'edit:my_request', request);
  const canApprove = canUser(currentUserRole, 'approve:request', request);
  const canReject = canUser(currentUserRole, 'reject:request', request);

  const handleEdit = () => onNavigate({ screen: 'EDIT_REQUEST', params: { id: requestId } });
  const handleApprove = () => console.log('Approving request', requestId); // Simulate action
  const handleReject = () => console.log('Rejecting request', requestId); // Simulate action

  return (
    <div className="app-content flex-col">
      <div className="main-content-area flex-col gap-lg">
        <Breadcrumbs path={breadcrumbsPath} onNavigate={onNavigate} />

        {/* Header Section */}
        <div className="flex justify-between items-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h1 style={{ fontSize: 'var(--font-size-3xl)' }}>{request.title} <StatusBadge status={request.status} /></h1>
          <div className="flex gap-md">
            {canEdit && <Button variant="secondary" onClick={handleEdit}><IconEdit /> Edit</Button>}
            {canApprove && request.status === 'Pending Approval' && <Button variant="primary" onClick={handleApprove}>Approve</Button>}
            {canReject && (request.status === 'Pending Approval' || request.status === 'Approved') && <Button variant="secondary" onClick={handleReject}>Reject</Button>}
            {canUser(currentUserRole, 'export:data') && <Button variant="text" onClick={() => console.log('Export Request PDF')}><IconDownload /></Button>}
          </div>
        </div>

        {/* Appian Record Alignment: Record Summary Page */}
        <div className="flex gap-lg" style={{ flexWrap: 'wrap' }}>
          {/* Milestone Tracker */}
          <div style={{ flex: '1 1 100%' }} className="bg-white rounded-xl shadow-md p-lg glass-effect">
            <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: 'var(--font-size-xl)' }}>Workflow Progress</h3>
            <MilestoneTracker currentStageId={request.workflowStage} allStages={workflowStages} />
            {request.workflowStage === 'Pending Approval' && (
              <p className="text-sm text-charcoal-500" style={{ marginTop: 'var(--spacing-md)' }}>
                This request is currently awaiting approval from a Facility Manager.
                <span style={{ color: 'var(--color-status-rejected-border)', marginLeft: 'var(--spacing-xs)' }}>SLA: Respond within 24 hours.</span>
              </p>
            )}
            {request.status === 'Rejected' && (
              <p className="text-sm text-charcoal-500" style={{ marginTop: 'var(--spacing-md)', color: 'var(--color-status-rejected-border)' }}>
                This request was rejected. Details can be found in the audit log.
              </p>
            )}
          </div>

          {/* Key Details */}
          <div style={{ flex: '1 1 450px' }} className="bg-white rounded-xl shadow-md p-lg glass-effect">
            <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: 'var(--font-size-xl)' }}>Request Details</h3>
            <div className="flex flex-col gap-sm text-sm">
              <div className="flex justify-between"><span className="text-charcoal-500">ID:</span> <span className="font-semibold">{request.id}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-500">Description:</span> <span className="font-semibold">{request.description}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-500">Priority:</span> <span className="font-semibold">{request.priority}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-500">Due Date:</span> <span className="font-semibold">{request.dueDate}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-500">Assignee:</span> <span className="font-semibold">{request.assignee}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-500">Created By:</span> <span className="font-semibold">{request.createdBy}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-500">Created At:</span> <span className="font-semibold">{new Date(request.createdAt).toLocaleString()}</span></div>
            </div>
            {/* Document Preview (conceptual) */}
            {request.files && request.files.length > 0 && (
              <div style={{ marginTop: 'var(--spacing-lg)' }}>
                <h4 style={{ marginBottom: 'var(--spacing-md)' }}>Attachments</h4>
                <div className="flex flex-col gap-sm">
                  {request.files.map((file, idx) => (
                    <div key={idx} className="uploaded-file-item">
                      <span className="uploaded-file-name">{file.name}</span>
                      <Button variant="text" onClick={() => console.log('Preview file', file.name)}>Preview</Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Related Records */}
          <div style={{ flex: '1 1 450px' }} className="bg-white rounded-xl shadow-md p-lg glass-effect">
            <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: 'var(--font-size-xl)' }}>Related Records</h3>
            {relatedWorkOrder && (
              <div className="flex flex-col gap-sm" style={{ marginBottom: 'var(--spacing-lg)' }}>
                <h4 className="text-charcoal-700">Associated Work Order:</h4>
                <WorkOrderCard workOrder={relatedWorkOrder} onClick={(action, params) => onNavigate({ screen: action, params })} currentUserRole={currentUserRole} />
              </div>
            )}
            {relatedAsset && (
              <div className="flex flex-col gap-sm">
                <h4 className="text-charcoal-700">Affected Asset:</h4>
                <AssetCard asset={relatedAsset} onClick={(action, params) => onNavigate({ screen: action, params })} currentUserRole={currentUserRole} />
              </div>
            )}
            {!relatedWorkOrder && !relatedAsset && (
              <div className="text-charcoal-500 text-sm">No related work orders or assets found for this request.</div>
            )}
          </div>
        </div>

        {/* News/Audit Feed */}
        <NewsAuditFeed logs={requestAuditLogs} currentUserRole={currentUserRole} />
      </div>
    </div>
  );
};

const WorkOrderDetailScreen = ({ workOrderId, onNavigate, currentUserRole }) => {
  const workOrder = sampleWorkOrders.find(wo => wo.id === workOrderId);
  const relatedRequest = sampleRequests.find(r => r.id === workOrder?.associatedRequest);
  const workOrderAuditLogs = sampleAuditLogs.filter(log => log.recordId === workOrderId);

  if (!workOrder) {
    return (
      <div className="app-content">
        <EmptyState
          title="Work Order Not Found"
          description={`The work order with ID ${workOrderId} could not be found.`}
          icon={<IconXCircle />}
          ctaButton={<Button onClick={() => onNavigate({ screen: 'DASHBOARD' })}>Go to Dashboard</Button>}
        />
      </div>
    );
  }

  const breadcrumbsPath = [
    { label: 'Work Orders', target: { screen: 'DASHBOARD' }, onClick: true },
    { label: workOrder.id, active: true },
  ];

  const canEdit = canUser(currentUserRole, 'edit:work_order', workOrder);
  const canUpdateStatus = canUser(currentUserRole, 'update_status:work_order', workOrder);

  const handleEdit = () => onNavigate({ screen: 'EDIT_WORK_ORDER', params: { id: workOrderId } });
  const handleUpdateStatus = () => console.log('Updating status for work order', workOrderId);

  return (
    <div className="app-content flex-col">
      <div className="main-content-area flex-col gap-lg">
        <Breadcrumbs path={breadcrumbsPath} onNavigate={onNavigate} />

        {/* Header Section */}
        <div className="flex justify-between items-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h1 style={{ fontSize: 'var(--font-size-3xl)' }}>{workOrder.title} <StatusBadge status={workOrder.status} /></h1>
          <div className="flex gap-md">
            {canEdit && <Button variant="secondary" onClick={handleEdit}><IconEdit /> Edit</Button>}
            {canUpdateStatus && <Button variant="primary" onClick={handleUpdateStatus}>Update Status</Button>}
          </div>
        </div>

        {/* Appian Record Alignment: Record Summary Page */}
        <div className="flex gap-lg" style={{ flexWrap: 'wrap' }}>
          {/* Milestone Tracker (Conceptual for Work Orders) */}
          <div style={{ flex: '1 1 100%' }} className="bg-white rounded-xl shadow-md p-lg glass-effect">
            <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: 'var(--font-size-xl)' }}>Work Order Progress</h3>
            {/* Work order specific workflow stages could be defined if different from requests */}
            <MilestoneTracker currentStageId={workOrder.workflowStage} allStages={workflowStages} />
          </div>

          {/* Key Details */}
          <div style={{ flex: '1 1 450px' }} className="bg-white rounded-xl shadow-md p-lg glass-effect">
            <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: 'var(--font-size-xl)' }}>Work Order Details</h3>
            <div className="flex flex-col gap-sm text-sm">
              <div className="flex justify-between"><span className="text-charcoal-500">ID:</span> <span className="font-semibold">{workOrder.id}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-500">Description:</span> <span className="font-semibold">{workOrder.description}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-500">Priority:</span> <span className="font-semibold">{workOrder.priority}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-500">Due Date:</span> <span className="font-semibold">{workOrder.dueDate}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-500">Technician:</span> <span className="font-semibold">{workOrder.technician}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-500">Created At:</span> <span className="font-semibold">{new Date(workOrder.createdAt).toLocaleString()}</span></div>
            </div>
          </div>

          {/* Related Records */}
          <div style={{ flex: '1 1 450px' }} className="bg-white rounded-xl shadow-md p-lg glass-effect">
            <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: 'var(--font-size-xl)' }}>Related Records</h3>
            {relatedRequest && (
              <div className="flex flex-col gap-sm" style={{ marginBottom: 'var(--spacing-lg)' }}>
                <h4 className="text-charcoal-700">Associated Request:</h4>
                <RequestCard request={relatedRequest} onClick={(action, params) => onNavigate({ screen: action, params })} currentUserRole={currentUserRole} />
              </div>
            )}
            {!relatedRequest && (
              <div className="text-charcoal-500 text-sm">No directly associated service request found.</div>
            )}
          </div>
        </div>

        {/* News/Audit Feed */}
        <NewsAuditFeed logs={workOrderAuditLogs} currentUserRole={currentUserRole} />
      </div>
    </div>
  );
};

const AssetDetailScreen = ({ assetId, onNavigate, currentUserRole }) => {
  const asset = sampleAssets.find(a => a.id === assetId);
  const relatedRequests = sampleRequests.filter(r => r.asset === assetId);
  const relatedWorkOrders = sampleWorkOrders.filter(wo => relatedRequests.some(r => r.id === wo.associatedRequest));
  const assetAuditLogs = sampleAuditLogs.filter(log => log.recordId === assetId);

  if (!asset) {
    return (
      <div className="app-content">
        <EmptyState
          title="Asset Not Found"
          description={`The asset with ID ${assetId} could not be found.`}
          icon={<IconXCircle />}
          ctaButton={<Button onClick={() => onNavigate({ screen: 'DASHBOARD' })}>Go to Dashboard</Button>}
        />
      </div>
    );
  }

  const breadcrumbsPath = [
    { label: 'Assets', target: { screen: 'DASHBOARD' }, onClick: true },
    { label: asset.id, active: true },
  ];

  const canEdit = canUser(currentUserRole, 'manage:assets', asset);
  const handleEdit = () => onNavigate({ screen: 'EDIT_ASSET', params: { id: assetId } });

  return (
    <div className="app-content flex-col">
      <div className="main-content-area flex-col gap-lg">
        <Breadcrumbs path={breadcrumbsPath} onNavigate={onNavigate} />

        {/* Header Section */}
        <div className="flex justify-between items-center" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h1 style={{ fontSize: 'var(--font-size-3xl)' }}>{asset.name} <StatusBadge status={asset.status} /></h1>
          <div className="flex gap-md">
            {canEdit && <Button variant="secondary" onClick={handleEdit}><IconEdit /> Edit Asset</Button>}
          </div>
        </div>

        {/* Appian Record Alignment: Record Summary Page */}
        <div className="flex gap-lg" style={{ flexWrap: 'wrap' }}>
          {/* Key Details */}
          <div style={{ flex: '1 1 450px' }} className="bg-white rounded-xl shadow-md p-lg glass-effect">
            <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: 'var(--font-size-xl)' }}>Asset Information</h3>
            <div className="flex flex-col gap-sm text-sm">
              <div className="flex justify-between"><span className="text-charcoal-500">ID:</span> <span className="font-semibold">{asset.id}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-500">Type:</span> <span className="font-semibold">{asset.type}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-500">Location:</span> <span className="font-semibold">{asset.location}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-500">Status:</span> <span className="font-semibold">{asset.status}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-500">Health:</span> <span className="font-semibold">{asset.health}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-500">Last Maintenance:</span> <span className="font-semibold">{asset.lastMaintenance}</span></div>
              <div className="flex justify-between"><span className="text-charcoal-500">Next Maintenance:</span> <span className="font-semibold">{asset.nextMaintenance}</span></div>
            </div>
            {/* Chart for Usage/Health Trends (conceptual) */}
            <div style={{ marginTop: 'var(--spacing-lg)' }}>
              <ChartPlaceholder title="Asset Usage History" type="Line" />
            </div>
          </div>

          {/* Related Records */}
          <div style={{ flex: '1 1 450px' }} className="bg-white rounded-xl shadow-md p-lg glass-effect">
            <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: 'var(--font-size-xl)' }}>Related Activities</h3>
            {relatedRequests.length > 0 && (
              <div className="flex flex-col gap-sm" style={{ marginBottom: 'var(--spacing-lg)' }}>
                <h4 className="text-charcoal-700">Service Requests ({relatedRequests.length}):</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
                  {relatedRequests.slice(0, 2).map(r => ( // Show first 2 as example
                    <div key={r.id} style={{ flex: '1 1 200px' }}>
                      <RequestCard request={r} onClick={(action, params) => onNavigate({ screen: action, params })} currentUserRole={currentUserRole} />
                    </div>
                  ))}
                  {relatedRequests.length > 2 && <Button variant="text" onClick={() => console.log('View all related requests')}>View All ({relatedRequests.length})</Button>}
                </div>
              </div>
            )}
            {relatedWorkOrders.length > 0 && (
              <div className="flex flex-col gap-sm">
                <h4 className="text-charcoal-700">Work Orders ({relatedWorkOrders.length}):</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
                  {relatedWorkOrders.slice(0, 2).map(wo => ( // Show first 2 as example
                    <div key={wo.id} style={{ flex: '1 1 200px' }}>
                      <WorkOrderCard workOrder={wo} onClick={(action, params) => onNavigate({ screen: action, params })} currentUserRole={currentUserRole} />
                    </div>
                  ))}
                  {relatedWorkOrders.length > 2 && <Button variant="text" onClick={() => console.log('View all related work orders')}>View All ({relatedWorkOrders.length})</Button>}
                </div>
              </div>
            )}
            {!relatedRequests.length && !relatedWorkOrders.length && (
              <div className="text-charcoal-500 text-sm">No related service requests or work orders found.</div>
            )}
          </div>
        </div>

        {/* News/Audit Feed */}
        <NewsAuditFeed logs={assetAuditLogs} currentUserRole={currentUserRole} />
      </div>
    </div>
  );
};

const FormScreen = ({ formType, recordId, onNavigate, currentUserRole }) => {
  const isEdit = !!recordId;
  const currentRecord = isEdit ? (
    formType === 'REQUEST' ? sampleRequests.find(r => r.id === recordId) :
    formType === 'WORK_ORDER' ? sampleWorkOrders.find(wo => wo.id === recordId) :
    formType === 'ASSET' ? sampleAssets.find(a => a.id === recordId) : null
  ) : {};

  const [formData, setFormData] = useState({
    title: currentRecord?.title || '',
    description: currentRecord?.description || '',
    priority: currentRecord?.priority || 'Medium',
    assignee: currentRecord?.assignee || '',
    asset: currentRecord?.asset || '',
    status: currentRecord?.status || 'Submitted',
    files: currentRecord?.files || [],
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' })); // Clear error on change
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFormData(prev => ({ ...prev, files: [...prev.files, ...newFiles] }));
  };

  const handleRemoveFile = (index) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is mandatory.';
    if (!formData.description) newErrors.description = 'Description is required.';
    if (formType === 'REQUEST' && !formData.asset) newErrors.asset = 'Associated Asset is required for requests.';
    // More field-level validations as per project input
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      console.log('Validation failed', errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`${isEdit ? 'Updating' : 'Creating'} ${formType}:`, formData);

    // Functional Update for state immutability
    if (isEdit) {
      if (formType === 'REQUEST') {
        // In a real app, this would update sampleRequests.
        // For this demo, we'll just log.
        console.log('Updated Request:', { ...currentRecord, ...formData });
      }
    } else {
      const newId = `${formType === 'REQUEST' ? 'SR' : formType === 'WORK_ORDER' ? 'WO' : 'AST'}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
      const newRecord = {
        id: newId,
        createdAt: new Date().toISOString(),
        ...formData,
        status: formType === 'REQUEST' ? 'Submitted' : 'Pending', // Auto-populated status
        workflowStage: formType === 'REQUEST' ? 'Submitted' : 'Submitted' // Auto-populated workflow stage
      };
      // In a real app, this would add to sampleRequests/WorkOrders/Assets.
      // For this demo, we'll just log.
      console.log('New Record Created:', newRecord);
    }

    setIsSubmitting(false);
    onNavigate({ screen: 'DASHBOARD' }); // Navigate back to dashboard or to detail view
  };

  const formTitle = `${isEdit ? 'Edit' : 'Create New'} ${formType === 'REQUEST' ? 'Service Request' : formType === 'WORK_ORDER' ? 'Work Order' : 'Asset'}`;
  const breadcrumbsPath = [
    { label: formType === 'REQUEST' ? 'Requests' : formType === 'WORK_ORDER' ? 'Work Orders' : 'Assets', target: { screen: 'DASHBOARD' }, onClick: true },
    { label: formTitle, active: true },
  ];

  return (
    <div className="app-content flex-col">
      <div className="main-content-area flex-col gap-lg" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Breadcrumbs path={breadcrumbsPath} onNavigate={onNavigate} />
        <div className="bg-white rounded-xl shadow-md p-lg glass-effect">
          <h1 style={{ marginBottom: 'var(--spacing-xl)', fontSize: 'var(--font-size-3xl)' }}>{formTitle}</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title" className="form-label">Title <span style={{ color: 'var(--color-status-rejected-border)' }}>*</span></label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-input"
                value={formData.title}
                onChange={handleInputChange}
                aria-required="true"
              />
              {errors.title && <p className="form-error">{errors.title}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="description" className="form-label">Description <span style={{ color: 'var(--color-status-rejected-border)' }}>*</span></label>
              <textarea
                id="description"
                name="description"
                className="form-textarea"
                rows="4"
                value={formData.description}
                onChange={handleInputChange}
                aria-required="true"
              ></textarea>
              {errors.description && <p className="form-error">{errors.description}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="priority" className="form-label">Priority <span style={{ color: 'var(--color-status-rejected-border)' }}>*</span></label>
              <select
                id="priority"
                name="priority"
                className="form-select"
                value={formData.priority}
                onChange={handleInputChange}
                aria-required="true"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
                <option value="Critical">Critical</option>
              </select>
            </div>

            {formType === 'REQUEST' && (
              <div className="form-group">
                <label htmlFor="asset" className="form-label">Associated Asset <span style={{ color: 'var(--color-status-rejected-border)' }}>*</span></label>
                <select
                  id="asset"
                  name="asset"
                  className="form-select"
                  value={formData.asset}
                  onChange={handleInputChange}
                  aria-required="true"
                >
                  <option value="">Select an Asset (Auto-populated suggestions could go here)</option>
                  {sampleAssets.map(asset => (
                    <option key={asset.id} value={asset.id}>{asset.name} ({asset.id})</option>
                  ))}
                </select>
                {errors.asset && <p className="form-error">{errors.asset}</p>}
              </div>
            )}

            {formType === 'WORK_ORDER' && (
              <div className="form-group">
                <label htmlFor="assignee" className="form-label">Assign Technician</label>
                <input
                  type="text"
                  id="assignee"
                  name="assignee"
                  className="form-input"
                  placeholder="e.g., John Doe (Auto-populated from available technicians)"
                  value={formData.assignee}
                  onChange={handleInputChange}
                />
              </div>
            )}

            {/* File Upload in Forms */}
            <div className="form-group">
              <label className="form-label">Attachments</label>
              <div className="file-upload-area" onClick={() => document.getElementById('file-upload').click()}>
                <input type="file" id="file-upload" multiple onChange={handleFileChange} />
                <IconDownload style={{ fontSize: '2rem', color: 'var(--color-primary-500)' }} />
                <p className="file-upload-text">Drag and drop files here, or click to browse</p>
              </div>
              {formData.files.length > 0 && (
                <div className="uploaded-file-list">
                  {formData.files.map((file, index) => (
                    <div key={index} className="uploaded-file-item">
                      <span className="uploaded-file-name">{file.name}</span>
                      <button type="button" onClick={() => handleRemoveFile(index)} className="remove-file-btn">×</button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-md" style={{ marginTop: 'var(--spacing-xl)', borderTop: '1px solid var(--color-slate-200)', paddingTop: 'var(--spacing-md)' }}>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : 'Save'}
              </Button>
              <Button type="button" variant="secondary" onClick={() => onNavigate({ screen: 'DASHBOARD' })} disabled={isSubmitting}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const EmptyState = ({ title, description, icon, ctaButton }) => (
  <div className="empty-state glass-effect">
    <div className="empty-state-icon">{icon}</div>
    <h3 className="empty-state-title">{title}</h3>
    <p className="empty-state-description">{description}</p>
    {ctaButton && <div className="empty-state-cta">{ctaButton}</div>}
  </div>
);

// --- Main App Component ---
function App() {
  const [view, setView] = useState({ screen: 'DASHBOARD', params: {} });
  // Dynamic role switching for demonstration of RBAC
  const [currentUserRole, setCurrentUserRole] = useState('ADMIN'); // Default to Admin for full view

  const handleNavigate = (newView) => {
    setView(prevView => ({
      ...newView,
      // Retain breadcrumb path, or reset based on screen type
      // For this demo, full-screen implies fresh breadcrumbs based on current view stack.
    }));
  };

  const renderScreen = () => {
    switch (view.screen) {
      case 'DASHBOARD':
        return <DashboardScreen onNavigate={handleNavigate} currentUserRole={currentUserRole} />;
      case 'REQUEST_DETAIL':
        return <RequestDetailScreen requestId={view.params?.id} onNavigate={handleNavigate} currentUserRole={currentUserRole} />;
      case 'WORK_ORDER_DETAIL':
        return <WorkOrderDetailScreen workOrderId={view.params?.id} onNavigate={handleNavigate} currentUserRole={currentUserRole} />;
      case 'ASSET_DETAIL':
        return <AssetDetailScreen assetId={view.params?.id} onNavigate={handleNavigate} currentUserRole={currentUserRole} />;
      case 'CREATE_REQUEST':
        return <FormScreen formType="REQUEST" onNavigate={handleNavigate} currentUserRole={currentUserRole} />;
      case 'EDIT_REQUEST':
        return <FormScreen formType="REQUEST" recordId={view.params?.id} onNavigate={handleNavigate} currentUserRole={currentUserRole} />;
      case 'CREATE_WORK_ORDER':
        return <FormScreen formType="WORK_ORDER" onNavigate={handleNavigate} currentUserRole={currentUserRole} />;
      case 'EDIT_WORK_ORDER':
        return <FormScreen formType="WORK_ORDER" recordId={view.params?.id} onNavigate={handleNavigate} currentUserRole={currentUserRole} />;
      case 'CREATE_ASSET':
        return <FormScreen formType="ASSET" onNavigate={handleNavigate} currentUserRole={currentUserRole} />;
      case 'EDIT_ASSET':
        return <FormScreen formType="ASSET" recordId={view.params?.id} onNavigate={handleNavigate} currentUserRole={currentUserRole} />;
      default:
        return <DashboardScreen onNavigate={handleNavigate} currentUserRole={currentUserRole} />;
    }
  };

  const [showGlobalSearch, setShowGlobalSearch] = useState(false);

  // Functional Spec: Session timeout rules - would be handled by backend + client-side monitoring
  // (e.g., check for JWT expiration, redirect to login page)
  useEffect(() => {
    const sessionTimeout = setTimeout(() => {
      // console.log("Session expired. Logging out...");
      // Simulate logout:
      // setCurrentUserRole('GUEST'); // Or redirect to login
    }, 1000 * 60 * 30); // 30 minutes
    return () => clearTimeout(sessionTimeout);
  }, [currentUserRole]); // Reset timer on user activity if state changes, or on component mount

  return (
    <div className="app-container">
      {/* Top Header */}
      <header className="app-header glass-effect">
        <h2 style={{ color: 'var(--color-primary-500)', fontSize: 'var(--font-size-xl)', fontWeight: 'var(--font-weight-bold)' }}>Smart Facility Maintenance</h2>
        <div className="flex items-center gap-md">
          {/* Global Search: Floating global search with smart suggestions */}
          <Button variant="text" onClick={() => setShowGlobalSearch(true)}><IconSearch style={{ marginRight: 'var(--spacing-xs)' }} /> Search</Button>
          <select
            value={currentUserRole}
            onChange={(e) => setCurrentUserRole(e.target.value)}
            className="form-select"
            style={{ width: '150px', padding: 'var(--spacing-xxs) var(--spacing-sm)' }}
          >
            <option value="EMPLOYEE">Employee</option>
            <option value="TECHNICIAN">Technician</option>
            <option value="ADMIN">Facility Manager</option>
          </select>
          <Button variant="secondary">User Profile</Button>
        </div>
      </header>

      {showGlobalSearch && <GlobalSearchOverlay onClose={() => setShowGlobalSearch(false)} onNavigate={handleNavigate} />}

      {/* Main Content Area - Full-screen navigation handled by renderScreen */}
      {renderScreen()}
    </div>
  );
}

export default App;