export default function StoryTray({ stories }) {
  const newStories = stories.slice()

  newStories.push({
    id: 'create',
    label: 'Create Story',
  })
  return (
    <ul>
      {newStories.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  )
}
