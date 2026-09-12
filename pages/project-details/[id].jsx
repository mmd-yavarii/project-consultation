import AmbientGif from '@/components/AmbientGif';
import AmbientVideo from '@/components/AmbientVideo';
import React from 'react';

function ProjectPageInfo() {
    return (
        <div>
            {/* <AmbientVideo src="/videos/showcase.mp4" poster="/images/showcase-poster.jpg" /> */}

            <div className="w-[500px]">
                <AmbientGif src="https://cdn.dribbble.com/userupload/20481043/file/original-ff919c0d8190474293a4a448343b80e2.gif" alt="Demo" />
            </div>
        </div>
    );
}

export default ProjectPageInfo;
