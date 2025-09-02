import React from 'react';

const modalStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const contentStyles = {
  background: '#fff',
  borderRadius: '15px',
  maxWidth: '500px',
  width: '100%',
  boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const imageStyles = {
  width: '100%',
  maxHeight: '300px',
  objectFit: 'cover',
  borderRadius: '15px',
  marginBottom: '16px',
};

export default function ProjectPreview({ open, imageSrc, description, onClose }) {
  if (!open) return null;

  return (
    <div style={modalStyles} onClick={onClose}>
      <div style={contentStyles} onClick={e => e.stopPropagation()}>
        <img src={imageSrc} alt="Project preview" style={imageStyles} />
        <div>
          <p style={{color: 'black'}}>{description}</p>
        </div>
      </div>
    </div>
  );
}