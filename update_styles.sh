sed -i '' '/#services-grid-wrapper.is-pinned/,$d' style.css
cat << 'CSS_EOF' >> style.css
#services-grid-wrapper.is-pinned {
    position: fixed;
    top: 80px; 
    left: 0;
    width: 100% !important; 
    background: rgba(10, 10, 12, max(0.95, var(--scroll-progress, 1)));
    backdrop-filter: blur(calc(12px * var(--scroll-progress, 1)));
    border-bottom: 1px solid rgba(255, 255, 255, calc(0.08 * var(--scroll-progress, 1)));
    z-index: 40;
    overflow: hidden;
    height: max(24px, calc(var(--start-height, 400px) - (var(--start-height, 400px) - 24px) * var(--scroll-progress, 0)));
}

#services-grid-wrapper.is-pinned,
#services-grid-wrapper.is-pinned * {
    transition: none !important;
}

#services-grid-wrapper.is-pinned #services-grid {
    display: flex;
    max-width: 1024px;
    margin: 0 auto;
    height: 100%;
    align-items: center;
    padding: 0 calc(24px * var(--scroll-progress, 1));
    gap: calc(32px * (1 - var(--scroll-progress, 0)));
}

#services-grid-wrapper.is-pinned .glass-effect {
    flex: 1;
    background: rgba(255, 255, 255, calc(0.02 * (1 - var(--scroll-progress, 0))));
    border: 1px solid rgba(255, 255, 255, calc(0.08 * (1 - var(--scroll-progress, 0))));
    border-radius: calc(12px * (1 - var(--scroll-progress, 0)));
    /* Force padding to 0 when morph is complete to allow height shrinking */
    padding: calc(32px * (1 - var(--scroll-progress, 0))) !important;
    height: 100%;
    min-height: 0 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
}

#services-grid-wrapper.is-pinned .service-content-inner {
    opacity: calc(1 - var(--scroll-progress, 0) * 2);
    width: 100%;
    transform: translateY(calc(var(--scroll-progress, 0) * -20px));
    display: flex;
    flex-direction: column;
}

#services-grid-wrapper.is-pinned .service-pinned-content {
    opacity: calc((var(--scroll-progress, 0) - 0.5) * 2) !important;
    display: flex !important;
    transform: translateY(calc((1 - var(--scroll-progress, 0)) * 20px));
    position: absolute;
    inset: 0;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    pointer-events: none;
    padding: 0 !important;
    margin: 0 !important;
}

#services-grid-wrapper.is-pinned .spline-bg,
#services-grid-wrapper.is-pinned .glow-container {
    opacity: calc(1 - var(--scroll-progress, 0) * 2) !important;
}

#services-grid-wrapper.is-pinned .glass-effect:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 12px;
    background: rgba(255, 255, 255, calc(0.08 * ((var(--scroll-progress, 0) - 0.8) * 5)));
    opacity: max(0, calc((var(--scroll-progress, 0) - 0.8) * 5));
}
CSS_EOF
