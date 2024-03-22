<?php

use Kirby\Cms\PluginAsset;
use Kirby\Toolkit\I18n;

return [
    'seo-audit' => [
        'props' => [
            'label' => fn ($label = null) => I18n::translate($label, $label),
            'keyphraseField' => fn ($keyphraseField = null) => is_string($keyphraseField) ? strtolower($keyphraseField) : null,
            'synonymsField' => fn ($synonymsField = null) => is_string($synonymsField) ? strtolower($synonymsField) : null,
            'assessments' => fn ($assessments = []) => is_array($assessments) ? $assessments : [],
            'links' => fn ($links = true) => $links !== false,
            'persisted' => fn ($persisted = true) => $persisted !== false,
            'logLevel' => fn ($logLevel = null) => in_array($logLevel, ['error', 'warn', 'info', 'debug'], true) ? $logLevel : 'warn'
        ],
        'computed' => [
            'config' => function () {
                /** @var \Kirby\Cms\App */
                $kirby = $this->kirby();
                $config = $kirby->option('johannschopplich.seo-audit', []);

                $defaultConfig = [
                    'proxy' => [
                        'params' => []
                    ]
                ];

                // Merge user configuration with defaults
                $config = array_replace_recursive($defaultConfig, $config);

                // Remove proxy API configuration for the client
                unset($config['proxy']);

                return $config;
            },
            'assets' => function () {
                /** @var \Kirby\Cms\App */
                $kirby = $this->kirby();
                $plugin = $kirby->plugin('johannschopplich/seo-audit');

                return $plugin
                    ->assets()
                    ->clone()
                    ->map(fn (PluginAsset $asset) => [
                        'filename' => $asset->filename(),
                        'url' => $asset->url()
                    ])
                    ->values();
            }
        ],
        'methods' => [
            'tryResolveQuery' => function ($value, $fallback = null) {
                if (is_string($value)) {
                    // Replace all matches of KQL parts with the query results
                    $value = preg_replace_callback('!\{\{(.+?)\}\}!', function ($matches) {
                        $result = $this->model()->query(trim($matches[1]));
                        return $result ?? '';
                    }, $value);
                }

                return $value ?? $fallback;
            }
        ]
    ]
];
