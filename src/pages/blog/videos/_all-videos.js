import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import VideoSrc from '../../markets/static/video/globe.mp4'
import VideoCard from './_video-card'
import VideoPlayer from './_video-player'
import { Flex } from 'components/containers'
import { Text, LocalizedLinkText } from 'components/elements'
import device from 'themes/device'
import RightArrow from 'images/svg/black-right-arrow.svg'

const VideoGrid = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    margin: 8rem 0;
    grid-template-columns: repeat(auto-fit, minmax(288px, 384px));
    grid-row-gap: 40px;
    grid-column-gap: 24px;
    grid-template-rows: auto;
`

const Container = styled(Flex)`
    width: 90%;
    max-width: 1200px;

    @media ${device.desktopL} {
        max-width: 1600px;
    }
    @media ${device.tabletL} {
        width: 100%;
        padding: 0 16px;
    }
`

const AllVideos = ({ video_data }) => {
    const [show, setShow] = useState(false)

    return (
        <Container m="0 auto" fd="column">
            <Flex jc="flex-start" ai="center" mt="4rem">
                <LocalizedLinkText to="/blog" color="grey-5">
                    Home
                </LocalizedLinkText>
                <img
                    src={RightArrow}
                    alt="Right arrow"
                    height={16}
                    width={16}
                    style={{ margin: '0 8px' }}
                />
                <Text>All videos</Text>
            </Flex>
            <VideoGrid style={{ justifyContent: 'center' }}>
                {video_data.map((item) => {
                    return <VideoCard key={item.id} item={item} openVideo={() => setShow(true)} />
                })}
            </VideoGrid>
            {show && <VideoPlayer video_src={VideoSrc} closeVideo={() => setShow(false)} />}
        </Container>
    )
}

AllVideos.propTypes = {
    video_data: PropTypes.arrayOf(Object),
}

export default AllVideos