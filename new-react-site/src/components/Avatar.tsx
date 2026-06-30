import React, { useState } from 'react';
import { profile } from '../data/profile';
import './Avatar.css';

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showRing?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ size = 'md', showRing = true }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`avatar avatar--${size}`}>
      {showRing && <div className="avatar__ring" aria-hidden="true" />}
      {failed ? (
        <div className="avatar__fallback" aria-label={profile.name}>
          SA
        </div>
      ) : (
        <img
          src={profile.avatar}
          alt={profile.name}
          className="avatar__img"
          loading="eager"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
};

export default Avatar;
