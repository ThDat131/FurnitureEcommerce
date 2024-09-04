'use client';
import React, { useEffect } from 'react';

const containerStyle = {
    width: '100%',
    minHeight: '300px',
};

export function MyGoogleMap() {
    useEffect(() => {}, []);

    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62710.218573909486!2d106.61002025403423!3d10.78151525786477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175299d5a5788b9%3A0xfde11550bf171687!2sd20%20Boardgame%20Cafe!5e0!3m2!1sen!2s!4v1722358584903!5m2!1sen!2s"
            style={containerStyle}
            loading="lazy"
            title="google-map"
        ></iframe>
    );
}

export default MyGoogleMap;
