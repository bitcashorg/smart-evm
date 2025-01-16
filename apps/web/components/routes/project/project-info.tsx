import type { ProjectWithAuction } from '@/lib/projects'
import { formatCurrency, formatDate } from '@/lib/utils'
import React, { type ReactNode, Fragment } from 'react'
import { ProjectShare } from './project-share'

interface ItemProps {
  label?: string
  value: string | ReactNode
  fields?: Array<{ label: string; value: string }>
}

function ListItem({ label, value }: ItemProps) {
  if (!label && React.isValidElement(value)) {
    // Directly return JSX elements
    return (
      <div className="flex justify-between w-full">
        <b>{value}</b>
      </div>
    )
  }

  return (
    <div className="flex justify-between w-full">
      <h3 className="flex items-center justify-between w-full">
        <span className="font-futura-pt-demi opacity-70">{label}: </span>
        <span className="text-right text-sm">
          {typeof value === 'string' ? value : null}
          {label === 'Presale' ? (
            <span className="text-xs text-infoForeground">
              (Or When Sold Out)
            </span>
          ) : null}
        </span>
      </h3>
    </div>
  )
}

export function ProjectInfo({
  project,
  presale = false,
}: {
  project: ProjectWithAuction
  presale?: boolean
  }) {
  const presaleStartDate = new Date(project?.start_timestamptz || 0)
  const presaleEndDate = new Date(project?.end_timestamptz || 0)
  const fields: Array<Array<ItemProps>> = [
    [
      {
        label: 'Presale', value: `${formatDate(presaleStartDate, 'numeric')} - ${formatDate(presaleEndDate, 'numeric')}
        ` },
      { label: 'Fundraising Goal', value: formatCurrency({ value: project.fundraising_goal / 100 }) },
      { label: 'Max Allocation', value: formatCurrency({ value: project.max_allocation / 100 }) },
    ],
    [
      { label: 'Token Sale', value: 'TBD' },
      { label: 'Fundraising Goal', value: '$250,000' },
      { label: 'Max Allocation', value: '$15,000' },
    ],
    [{ label: 'Ticker', value: 'BL' }],
    [
      // Passing `project` to `ProjectShare` if it is required as a prop
      { value: <ProjectShare project={project} /> },
    ],
  ]

  const filteredFields = presale ? [fields[0]] : fields
  return (
    <>
      {filteredFields.map((items, k) => {
        return React.isValidElement(items[0].value) ? (
          items[0].value
        ) : (
          <div
            key={`project-info-${project.id}-${k}`}
            className="flex w-full min-w-[250px] flex-col justify-evenly rounded-sm bg-muted px-4 py-3 md:min-w-[203px] whitespace-pre-line"
          >
            {items.map((item, ik) => (
              <Fragment
                key={`presale-field-${(item.label || 'default').replace(/\s/g, '_')}`}
              >
                <ListItem {...item} />

                {ik < items.length - 1 && (
                  <hr className="w-full my-2 border-accent-500/50" />
                )}
              </Fragment>
            ))}
          </div>
        )
      })}
    </>
  )
}
