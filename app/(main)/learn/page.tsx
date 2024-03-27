import { FeedWrapper } from '@/components/feed-wrapper'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { Header } from './header'
import { UserProgress } from '@/components/user-progress'

export default function LearnPage() {
	return (
		<div className='flex flex-row-reverse gap-[48px] px-6'>
			<StickyWrapper>
				<UserProgress
					activeCourse='{userProgress.activeCourse}'
					hearts={5}
					points={100}
					hasActiveSubscription={true}
				/>
			</StickyWrapper>
			<FeedWrapper>
				<Header title='{userProgress.activeCourse.title}' />
			</FeedWrapper>
		</div>
	)
}
