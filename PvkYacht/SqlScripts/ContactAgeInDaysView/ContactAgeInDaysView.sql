  Create or Alter view PvkvwContactAgeDays
as
select Id as PvkId,Name as PvkName,BirthDate as PvkBirthDate,
datediff(day,Birthdate,getdate()) as PvkAgeDays from Contact