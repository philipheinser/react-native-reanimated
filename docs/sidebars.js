module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Fundamentals',
      items: [
        'fundamentals/about',
        'fundamentals/installation',
        'fundamentals/worklets',
        'fundamentals/shared-values',
        'fundamentals/animations',
        'fundamentals/events',
        'fundamentals/custom_events',
        'fundamentals/layout_animations',
        'fundamentals/architecture',
        'fundamentals/web-support',
        'fundamentals/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        {
          Animations: [
            'api/animations/cancelAnimation',
            'api/animations/withDecay',
            'api/animations/withDelay',
            'api/animations/withRepeat',
            'api/animations/withSequence',
            'api/animations/withSpring',
            'api/animations/withTiming',
          ],
          Hooks: [
            'api/hooks/useAnimatedGestureHandler',
            'api/hooks/useAnimatedKeyboard',
            'api/hooks/useAnimatedProps',
            'api/hooks/useAnimatedReaction',
            'api/hooks/useAnimatedRef',
            'api/hooks/useAnimatedScrollHandler',
            'api/hooks/useAnimatedSensor',
            'api/hooks/useAnimatedStyle',
            'api/hooks/useDerivedValue',
            'api/hooks/useEvent',
            'api/hooks/useFrameCallback',
            'api/hooks/useHandler',
            'api/hooks/useScrollViewOffset',
            'api/hooks/useSharedValue',
          ],
          'Layout Animations': [
            'api/LayoutAnimations/customAnimations',
            'api/LayoutAnimations/entryAnimations',
            'api/LayoutAnimations/exitAnimations',
            'api/LayoutAnimations/keyframeAnimations',
            'api/LayoutAnimations/layoutTransitions',
          ],
        },
        'api/sharedElementTransitions',
        {
          'Native methods': [
            'api/nativeMethods/measure',
            'api/nativeMethods/scrollTo',
          ],
          Miscellaneous: [
            'api/miscellaneous/getRelativeCoords',
            'api/miscellaneous/interpolate',
            'api/miscellaneous/runOnJS',
            'api/miscellaneous/runOnUI',
            'api/miscellaneous/interpolateColors',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guide/testing',
        'guide/debugging',
        'guide/migration-from-1.x',
        'guide/migration-from-2.x',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: ['tutorials/LayoutAnimations/layoutAnimations'],
    },
    {
      type: 'doc',
      id: 'community',
    },
  ],
};
