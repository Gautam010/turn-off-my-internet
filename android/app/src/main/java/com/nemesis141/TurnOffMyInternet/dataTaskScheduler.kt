package com.nemesis141.TurnOffMyInternet

class dataTaskScheduler (appContext: Context, workerParams: WorkerParameters) : Worker(appContext, workerParams) {

    override fun doWork(): Result {
        // Your task logic here, e.g., disabling mobile data
        return Result.success()
    }
}
