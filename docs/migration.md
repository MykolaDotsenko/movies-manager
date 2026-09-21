# Consolidation provenance

## Canonical repository

`MykolaDotsenko/movies-manager` becomes the canonical full-stack repository.

| Layer | Source | Imported snapshot |
| --- | --- | --- |
| Frontend | `MykolaDotsenko/movies-manager` | `225f6a8107c1b7ae60dce365fc0215891e31137c` |
| Backend | `MykolaDotsenko/MoviesAPI` | `11a6f5e8450184a12c7264adf9f86954a8a5fa73` |

## Directory mapping

~~~text
old movies-manager root  -> frontend/
old MoviesAPI root       -> backend/
~~~

The generated Firebase deployment cache was intentionally excluded.

The source backend's credential-bearing `appsettings.Development.json` was intentionally not copied byte-for-byte; a sanitized development configuration replaces it.

## History policy

The frontend's existing history remains in the canonical repository; Git can recognize the structural move into `frontend/`.

The backend's pre-consolidation commit graph remains in the original `MoviesAPI` repository. This document pins the exact imported backend commit rather than fabricating rewritten history.
