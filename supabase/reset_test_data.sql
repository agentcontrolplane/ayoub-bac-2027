-- Reset all test/progress data while keeping auth users and profiles.
-- Run this in Supabase SQL Editor when you want to restart clean.
delete from public.submissions where family_id='ayoub-2027';
delete from public.learning_notes where family_id='ayoub-2027';
delete from public.grades where family_id='ayoub-2027';
delete from public.resources where family_id='ayoub-2027';
delete from public.tasks where family_id='ayoub-2027';
delete from public.exercises where family_id='ayoub-2027';
delete from public.lessons where family_id='ayoub-2027';
delete from public.days where family_id='ayoub-2027';
delete from public.weeks where family_id='ayoub-2027';
delete from public.checkins where family_id='ayoub-2027';
delete from storage.objects where bucket_id='ayoub-files';
