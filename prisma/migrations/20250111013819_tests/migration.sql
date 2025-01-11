-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('SCALE', 'OPTION', 'SELECTION', 'TEXT');

-- CreateTable
CREATE TABLE "Test" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestSection" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "testId" TEXT NOT NULL,

    CONSTRAINT "TestSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "type" "QuestionType" NOT NULL,
    "testSectionId" INTEGER NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTakenTest" (
    "id" SERIAL NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "endedAt" TIMESTAMP(3) NOT NULL,
    "lectureBeganAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "testId" TEXT NOT NULL,

    CONSTRAINT "UserTakenTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAnswer" (
    "answer" TEXT NOT NULL,
    "userTakenTestId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,

    CONSTRAINT "UserAnswer_pkey" PRIMARY KEY ("userTakenTestId","questionId")
);

-- AddForeignKey
ALTER TABLE "TestSection" ADD CONSTRAINT "TestSection_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_testSectionId_fkey" FOREIGN KEY ("testSectionId") REFERENCES "TestSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTakenTest" ADD CONSTRAINT "UserTakenTest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTakenTest" ADD CONSTRAINT "UserTakenTest_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAnswer" ADD CONSTRAINT "UserAnswer_userTakenTestId_fkey" FOREIGN KEY ("userTakenTestId") REFERENCES "UserTakenTest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserAnswer" ADD CONSTRAINT "UserAnswer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
