import { Timeline as MantineTimeline, Text, TimelineItem } from '@mantine/core';
import styles from './Timeline.module.css'
import { IconWriting, IconHandStop, IconTrophy } from '@tabler/icons-react';

export default function Timeline() {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Timeline</h1>

            <MantineTimeline lineWidth={2} bulletSize={40}>
                <TimelineItem bullet={<IconWriting size={24} />} title="Kick off">
                    <Text c="dimmed" size="sm">
                        Participants can begin creating and publishing their 1,000-word blogs on Opire.
                    </Text>
                    <Text size="xs" mt={4}>
                        October 1st - TBD
                    </Text>
                </TimelineItem>

                <TimelineItem bullet={<IconHandStop size={24} />} title="Submission deadline">
                    <Text c="dimmed" size="sm">
                        Final day for participants to submit their blogs. Make sure all entries are in by the end of the day!
                    </Text>
                    <Text size="xs" mt={4}>
                        October 30th - TBD
                    </Text>
                </TimelineItem>

                <TimelineItem bullet={<IconTrophy size={24} />} title="Review and selection">
                    <Text c="dimmed" size="sm">
                        Review all the submissions, select the top blogs, and announce the winners. Send out certificates and prize details through official channels.
                    </Text>
                    <Text size="xs" mt={4}>
                        November 5th - TBD
                    </Text>
                </TimelineItem>
            </MantineTimeline>
        </section>
    );
}
