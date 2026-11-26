/**
 * The goal picked for a lead, shared between the goal chips at the top of a
 * page and the form at the bottom, so a chip click arrives preselected.
 * Business leads start on the free audit, the default offer there.
 */
export function useLeadGoal(source: 'business' | 'finances') {
  return useState<string>(`lead-goal-${source}`, () => (source === 'business' ? 'audit' : ''))
}
