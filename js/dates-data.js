const datesHTML = `
<div class="date-list">
    <div class="date-card">
        <span class="label"><i class="fa fa-envelope"></i> Abstract Submission</span>
        <span class="value">Aug 22, 2026</span>
    </div>
    <div class="date-card">
        <span class="label"><i class="fa fa-file-alt"></i> Full Paper Submission</span>
        <span class="value">Oct 03, 2026</span>
    </div>
    <div class="date-card">
        <span class="label"><i class="fa fa-check-circle"></i> Notification of Acceptance</span>
        <span class="value">Dec 01, 2026</span>
    </div>
    <div class="date-card">
        <span class="label"><i class="fa fa-file-upload"></i> Final Paper Submission</span>
        <span class="value">Feb 28, 2026</span>
    </div>
    <div class="date-card">
        <span class="label"><i class="fa fa-calendar-check"></i> Conference</span>
        <span class="value">April 29–30, 2027</span>
    </div>
</div>`;

function injectDates() {
    const datesPlaceholder = document.getElementById('dates-placeholder');
    if (datesPlaceholder) {
        datesPlaceholder.innerHTML = datesHTML;
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectDates);
} else {
    injectDates();
}
