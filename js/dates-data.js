const datesHTML = `
<div class="date-list">
    <div class="date-card" style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.8rem; border-bottom: 1px solid #f1f5f9; padding-bottom: 0.4rem;">
        <span class="label"><i class="fa fa-envelope" style="width: 14px;"></i> Abstract:</span>
        <span class="value" style="font-weight: 700; color: #1e3a8a;">Aug 22, 2026</span>
    </div>
    <div class="date-card" style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.8rem; border-bottom: 1px solid #f1f5f9; padding-bottom: 0.4rem;">
        <span class="label"><i class="fa fa-file-alt" style="width: 14px;"></i> Full Paper:</span>
        <span class="value" style="font-weight: 700; color: #1e3a8a;">Oct 03, 2026</span>
    </div>
    <div class="date-card" style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.8rem; border-bottom: 1px solid #f1f5f9; padding-bottom: 0.4rem;">
        <span class="label"><i class="fa fa-check-circle" style="width: 14px;"></i> Acceptance:</span>
        <span class="value" style="font-weight: 700; color: #1e3a8a;">Dec 01, 2026</span>
    </div>
    <div class="date-card" style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.8rem; border-bottom: 1px solid #f1f5f9; padding-bottom: 0.4rem;">
        <span class="label"><i class="fa fa-user-check" style="width: 14px;"></i> Registration Ends:</span>
        <span class="value" style="font-weight: 700; color: #1e3a8a;">Jan 31, 2027</span>
    </div>
    <div class="date-card" style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.8rem; border-bottom: 1px solid #f1f5f9; padding-bottom: 0.4rem;">
        <span class="label"><i class="fa fa-file-upload" style="width: 14px;"></i> Final Paper:</span>
        <span class="value" style="font-weight: 700; color: #1e3a8a;">Feb 28, 2027</span>
    </div>
    <div class="date-card" style="display: flex; justify-content: space-between; font-size: 0.9rem; padding-bottom: 0.4rem;">
        <span class="label"><i class="fa fa-calendar-check" style="width: 14px;"></i> Conference:</span>
        <span class="value" style="font-weight: 700; color: #1e3a8a;">Apr 29-30, 2027</span>
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
